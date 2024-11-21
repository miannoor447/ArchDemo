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
            LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
            throw errorObject;
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
            LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
            throw errorObject;
        }

        if (config.communication.encryption) {
            ({ decryptedPayload, encryptionKey, PlatformName, PlatformVersion } = await handleEncryption(req, res, { config, data, response }));
        }
        if (data.requestMetaData.permission) {
            try {
                permissionChecker(req, res, data, decryptedPayload, requestedPath);
            } catch (error) {
                const errorObject = {
                    frameworkStatusCode: 'E31', // Invalid or Missing Permission
                    httpStatusCode: 403, // Forbidden
                    description: error.message || "Permission validation failed"
                };
                LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                throw errorObject;
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
                LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                throw errorObject;
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
                LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                throw errorObject;
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
                LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                throw errorObject;
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
                LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                throw errorObject;
            }
        } else {
            payload.return = await objectResolver(req, res, decryptedPayload, {config, data, response});
            // Run each function listed in payloadFunction array
            if (data.apiInfo.utilityFunctions.payloadFunction.length > 0) {
                for (const util of data.apiInfo.utilityFunctions.payloadFunction) {
                    try {
                        payload[util] = await util(req, res);
                    } catch (error) {
                        const errorObject = {
                            frameworkStatusCode: 'E24', // Payload Function Error
                            httpStatusCode: 500, // Internal Server Error
                            description: error.message || "Payload function execution failed"
                        };
                        LogError(req, res, errorObject.httpStatusCode, "middlewareHandler", errorObject.description, errorObject.frameworkStatusCode); // Log the error
                        throw errorObject;
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
    }
};

module.exports = { middlewareHandler };
