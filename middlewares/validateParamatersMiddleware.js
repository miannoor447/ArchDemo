const sendResponse = require("../Constants/response.js");
const validationsLib = require("../Constants/validateParameters.js");

const validateParametersMiddleware = async (req, res, decryptedBody, apiObject) => {
    try {
        const { config, data } = apiObject;
        let { step } = decryptedBody || req.query;
        console.log(decryptedBody);
        step = step ? parseInt(step) - 1 : 0; // Set step to 0 if not provided
        const attributeValidations = {};
        let parameters;
        parameters = data.parameters.fields[step];
        
        //console.log("parameters:", parameters);

        // Validate each parameter based on the structure
        for (const paramConfig of parameters) {
            const paramName = paramConfig.name;
            const paramValue = decryptedBody[paramName] || req.query[paramName];

            // Check if the parameter is required and validate
            if (paramConfig.required && (paramValue === undefined || paramValue === null)) {
                const errorMessage = `Missing required parameter: ${paramName}`;
                console.error(errorMessage);

                const errorObject = {
                    frameworkStatusCode: 'E12', // Required parameter missing
                    httpStatusCode: 400, // Bad request
                    description: errorMessage
                };

                sendResponse(res, 400, errorMessage);
                throw errorObject;
            }

            // If there are validation functions for the parameter
            if (paramConfig.validations) {
                for (const validationName of paramConfig.validations) {
                    const validationFunction = global[validationName];

                    if (!validationFunction) {
                        const errorMessage = `Validation function not found: ${validationName}`;
                        console.error(errorMessage);

                        const errorObject = {
                            frameworkStatusCode: 'E11', // Validation failure
                            httpStatusCode: 500, // Internal server error
                            description: errorMessage
                        };

                        sendResponse(res, 500, errorMessage);
                        throw errorObject;
                    }

                    try {
                        validationFunction(req, res, paramValue);  // Perform validation
                    } catch (validationError) {
                        const errorMessage = `Validation failed for ${paramName}: ${validationError.message}`;
                        console.error(errorMessage);

                        const errorObject = {
                            frameworkStatusCode: 'E10', // Parameter validation failure
                            httpStatusCode: 400, // Bad request
                            description: errorMessage
                        };

                        sendResponse(res, 400, errorMessage);
                        throw errorObject;
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
        console.error("Validation Error:", error.description || error.message);

        const errorResponse = {
            frameworkStatusCode: error.frameworkStatusCode || 'E00', // Default to a general error code
            httpStatusCode: error.httpStatusCode || 500, // Default to HTTP 500 for server errors
            description: error.description || `Validation Error: ${error.message}`
        };

        throw errorResponse; // Re-throw the error object
    }
};

module.exports = validateParametersMiddleware;
