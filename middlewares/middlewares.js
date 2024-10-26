const sendResponse = require("../Constants/response");
const validateToken = require('./validateToken.js');
const permissionChecker = require('./permissionChecker.js');
const validateParametersMiddleware = require('./validateParamatersMiddleware.js');
const otpVerif = require("../Constants/otpVerif.js");
const objectResolver = require("./objectResolver.js");

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const middlewareHandler = async (req, res, next) => {
    try {
        let payload = {};
        
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
        const { config, data } = apiObject;
        const { features } = config;

        if (req.method != apiObject.data.requestType){
            return sendResponse(res, 400, "Incorrect Request Method");
        }
        if(apiObject.data.permission) {await permissionChecker(req, res, data, requestedPath);}

        if (features.authorization.accessToken) {
            await validateToken(req, res, next);
        }
        if (features.parameters) {
            await validateParametersMiddleware(req, res, apiObject, objectName);
        }
        if (features.otpVerif) {
            payload.assign(payload, await otpVerif(req, res));
        }
        if (data.apiInfo.callbackFunction){
            data.apiInfo.callbackFunction(req, res);
        }
        else{
            Object.assign(payload, objectResolver(req, res, apiObject))
            if (data.apiInfo.payloadFunction){
                for (const util of data.apiInfo.payloadFunction){
                    Object.assign(payload, util(req, res))
                }
            }
        }
    }
    catch (error) {
        console.log(error);
        sendResponse(res, 400, error.message);
    }
}

module.exports = { middlewareHandler };
