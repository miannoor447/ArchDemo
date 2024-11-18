const executeQueryWithPagination = require('../Constants/executeQueryWithPagination.js');
const { executeQuery } = require('../Constants/queryExecution.js');
const getPaginationParams = require('../Constants/getPaginationParams.js');
const sendResponse = require('../Constants/response.js');
const getDateTime = require("../Constants/getDateTime.js");

const objectResolver = async (req, res, apiObject) => {
    try {
        let { step } = req.body || req.query || 0;
        step = parseInt(step) - 1; // Adjust step index
        const { page, limit } = getPaginationParams(req);
        const [CreatedAtDate, CreatedAtTime] = getDateTime();
        const [UpdatedAtDate, UpdatedAtTime] = [CreatedAtDate, CreatedAtTime];
        const { queryPayload } = apiObject.data.apiInfo[step];

        // Create an object to hold parameter values
        const paramValues = {};

        // Extract parameters based on their sources and replace placeholders in queryPayload
        let completeQuery = queryPayload;

        for (const field of apiObject.data.parameters.fields[step]) {
            const source = field.source; // Source of the parameter
            const name = field.name; // Name of the parameter

            // Depending on the source, extract the value
            if (source === "req.body") {
                paramValues[name] = req.body[name];
            } else if (source === "req.query") {
                paramValues[name] = req.query[name];
            }
            // Add any other sources if needed

            // Replace placeholders in the complete query with actual values
            completeQuery = completeQuery.replace(`{{${name}}}`, paramValues[name]);
        }

        // Add predefined values to the parameter values
        completeQuery = completeQuery
            .replace(`{{CreatedAtDate}}`, CreatedAtDate)
            .replace(`{{CreatedAtTime}}`, CreatedAtTime)
            .replace(`{{UpdatedAtDate}}`, UpdatedAtDate)
            .replace(`{{UpdatedAtTime}}`, UpdatedAtTime)

        console.log(completeQuery);
        return;
        if (apiObject.data.pagination) {
            await executeQueryWithPagination(res, completeQuery, "", page, limit);
        } else {
            await executeQuery(res, completeQuery);
        }

        // Optionally send a response if needed
        sendResponse(res, { message: "Query executed successfully." });

    } catch (error) {
        throw new Error(error.message);
    }
};

objectResolver(req, res, AddAdmin_object)
module.exports = objectResolver;
