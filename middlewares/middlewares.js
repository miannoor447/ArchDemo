const validateToken = require('./validateToken.js');
const permissionChecker = require('./permissionChecker.js');
const validateParametersMiddleware = require('./validateParamatersMiddleware.js');
const otpVerif = require("../Constants/otpVerif.js");
const objectResolver = require("./objectResolver.js");
const handleVersionChecking = require("./versionChecker.js");
const handleEncryption = require("./platformEncryption.js");
const LogError = require("../databases/Errorlog");  // Import the LogError function
const sendResponse = require('../Constants/response.js');
const { encryptObject } = require('../Encryption/aes.js');
const logMessage = require('../LogFunctions/consoleLog.js');

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const middlewareHandler = async (req, res, next) => {
    try {
        let payload = {}, PlatformName, PlatformVersion;
        const requestedPath = req.path.replace('/api/', '');
        const pathParts = requestedPath.split('/');
        const objectName = pathParts.length >= 2
            ? pathParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)) // Capitalize each segment
                .reduce((acc, curr, index) => {
                    if (index === 0) return acc; // Skip the first segment
                    return acc + curr; // Concatenate segments
                }, pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1)) + '_object' // Start with the second segment
            : 'InvalidPath'; // Handle cases with less than 2 segments
        
        const apiObject = global[objectName];
        if (!apiObject) {
            const errorObject = {
                frameworkStatusCode: 'E50', // API Object Does Not Exist
                httpStatusCode: 404, // Not Found
                description: `API Object not found for path: ${requestedPath}`
            };
            await LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode);
            return; 
        }
        const { config, data, response } = await handleVersionChecking(req, res, apiObject);    
        const { features } = config;
        let decryptedPayload = req.body;
        let encryptionKey = null;
        if (req.method !== data.requestMetaData.requestMethod) {
            const errorObject = {
                frameworkStatusCode: 'E52', // Mismatch Request Method
                httpStatusCode: 405, // Method Not Allowed
                description: "Incorrect Request Method"
            };
            await LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
            return
        }

        if (config.communication.encryption) {
            ({ decryptedPayload, encryptionKey, PlatformName, PlatformVersion } = await handleEncryption(req, res, { config, data, response }));
        }
        logMessage([`Decrypted Payload =  ${decryptedPayload}`, `Req Body = ${req.body}`]);
        if (data.requestMetaData.permission) {
            try {
                permissionChecker(req, res, data, decryptedPayload, requestedPath);
            } catch (error) {
                const errorObject = {
                    frameworkStatusCode: 'E31', // Invalid or Missing Permission
                    httpStatusCode: 403, // Forbidden
                    description: error.message || "Permission validation failed"
                };
                await LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                return
            }
        }

        if (config.verification.accessToken) {
            try {
                await validateToken(req, res, decryptedPayload, PlatformName, PlatformVersion);
            } catch (error) {
                const errorObject = {
                    frameworkStatusCode: 'E40', // Invalid or Expired Token
                    httpStatusCode: 401, // Unauthorized
                    description: error.message || "Access token validation failed"
                };
                await LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                return
            }
        }

        if (config.verification.otp) {
            try {
                payload.otpVerif = await otpVerif(req, res, decryptedPayload);
            } catch (error) {
                const errorObject = {
                    frameworkStatusCode: 'E42', // OTP Verification Failure
                    httpStatusCode: 401, // Unauthorized
                    description: error.message || "OTP verification failed"
                };
                await LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                return
            }
        }

        if (features.parameters) {
            try {
                await validateParametersMiddleware(req, res, decryptedPayload, {config, data, response});
            } catch (error) {
                const errorObject = {
                    frameworkStatusCode: 'E10', // Parameter Validation Failure
                    httpStatusCode: 400, // Bad Request
                    description: error.message || "Parameter validation failed"
                };
                await LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                return
            }
        }
    
        if (data.apiInfo.utilityFunctions.callbackFunction) {
            try {
                data.apiInfo.utilityFunctions.callbackFunction(req, res, decryptedPayload);
            } catch (error) {
                const errorObject = {
                    frameworkStatusCode: 'E22', // Callback Function Error
                    httpStatusCode: 500, // Internal Server Error
                    description: error.message || "Callback function execution failed"
                };
                await LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                return
            }
        } else {
            payload.return = await objectResolver(req, res, decryptedPayload, {config, data, response});
            // Run each function listed in payloadFunction array
            if (data.apiInfo.utilityFunctions.payloadFunction.length > 0) {
                for (const util of data.apiInfo.utilityFunctions.payloadFunction) {
                    try {
                        const functionName = util.name; // Get the name of the async function'
                        payload[functionName] = await util(req, res); // Store the result using the function name
                    } catch (error) {
                        console.log(error);
                        const errorObject = {
                            frameworkStatusCode: 'E24', // Payload Function Error
                            httpStatusCode: 500, // Internal Server Error
                            description: error.message || "Payload function execution failed"
                        };
                        await LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                        return
                    }
                }
            }
        }

        if (config.communication.encryption) {
            sendResponse(res, 200, "API Hit Successfully",encryptObject(payload, encryptionKey));
        } else {
            sendResponse(res, 200, "API Hit Successfully", payload);
        }
    }
    catch (error) {
        await LogError(req, res, 500, "middlewareHandler", error.message, null); // Log the error
        logMessage(error.message);
    }
};

module.exports = { middlewareHandler };
