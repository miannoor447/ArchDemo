require('../Constants/validateParameters.js')
const LogError = require('../databases/Errorlog.js')
const validateParametersMiddleware = async (req, res, decryptedBody, apiObject) => {
    try {
        const { config, data } = apiObject;
        const attributeValidations = {};
        let parameters;
        parameters = data.parameters.fields;

        // Validate each parameter based on the structure
        for (const paramConfig of parameters) {
            const paramName = paramConfig.name;
            const paramValue = decryptedBody[paramName] || req.query[paramName];

            // Check if the parameter is required and validate
            if (paramConfig.required && (paramValue === undefined || paramValue === null)) {
                const errorMessage = `Missing required parameter: ${paramName}`;
                console.error(errorMessage);
                throw new Error(errorMessage);
            }

            // If there are validation functions for the parameter
            if (paramConfig.validations) {
                for (const validationName of paramConfig.validations) {
                    const validationFunction = global[validationName];

                    if (!validationFunction) {
                        const errorMessage = `Validation function not found: ${validationName}`;
                        console.error(errorMessage);
                        throw new Error(errorMessage);

                    }

                    try {
                        validationFunction(req, res, paramValue);  // Perform validation
                    } catch (validationError) {
                        const errorMessage = `Validation failed for ${paramName}: ${validationError.message}`;
                        throw new Error(errorMessage);
                    }
                }
            }
        }
    } catch (error) {
        console.error("Validation Error:", error.description || error.message);
        throw new Error(`Validation Error: ${error.message}`); // Re-throw the error object
    }
};

module.exports = validateParametersMiddleware;
