const sendResponse = require("../Constants/response.js");
const validationsLib = require("../Constants/validateParameters.js"); 

const validateParametersMiddleware = async (req, res, apiObject, apiKey) => {
    try {
        const { config, data } = apiObject;
        let { step } = req.body || req.query;
        step = step ? parseInt(step) - 1 : 0; // Set step to 0 if not provided
        const attributeValidations = {};
        let parameters;

            parameters = data.parameters.fields[step];

        console.log("parameters:", parameters);

        // Validate each parameter based on the structure
        for (const paramConfig of parameters) {
            const paramName = paramConfig.name;
            const paramValue = req.body[paramName] || req.query[paramName]; 

            // Check if the parameter is required and validate
            if (paramConfig.required && (paramValue === undefined || paramValue === null)) {
                throw new Error(`Missing required parameter: ${paramName}`);
            }

            // Check for optional parameter
            if (paramConfig.validations) {
                for (const validationName of paramConfig.validations) {
                    const validationFunction = global[validationName];
                    validationFunction(req, res, paramValue);
                }
            }
        }

        
    } catch (error) {
        console.error("Validation Error:", error.message);
        throw new Error(error.message);
    }
};

module.exports = validateParametersMiddleware;
