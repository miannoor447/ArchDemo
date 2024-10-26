const executeQueryWithPagination = require('../Constants/executeQueryWithPagination.js');
const { executeQuery } = require('../Constants/queryExecution.js');
const getPaginationParams = require('../Constants/getPaginationParams.js');
const sendResponse = require('../Constants/response.js');
const getDateTime = require("../Constants/getDateTime.js");

const objectResolver = async (req, res, apiObject) => {
    try {
        let { step } = req.body || req.query;
        step = step ? parseInt(step) - 1 : 0; // Set step to 0 if not provided
        const { page, limit } = getPaginationParams(req);
        const [CreatedAtDate, CreatedAtTime] = getDateTime();
        const [UpdatedAtDate, UpdatedAtTime] = [CreatedAtDate, CreatedAtTime];
        const createdAt = CreatedAtDate + CreatedAtTime;
        const updatedAt = createdAt;
        const { queryPayload } = apiObject.data.apiInfo[step].query;
        let results;
        if (!queryPayload) {
            throw new Error("Query payload is missing.");
        }

        // Create an object to hold parameter values
        const paramValues = {};

        // Replace placeholders in queryPayload
        let completeQuery = queryPayload;

        // Iterate over fields to extract values and replace placeholders
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

            // Replace nested placeholders
            completeQuery = replaceNestedPlaceholders(completeQuery, paramValues);
        }

        // Add predefined values to the parameter values, ensuring they're quoted
        completeQuery = completeQuery
            .replace(/{{CreatedAtDate}}/g, `'${CreatedAtDate}'`)
            .replace(/{{CreatedAtTime}}/g, `'${CreatedAtTime}'`)
            .replace(/{{UpdatedAtDate}}/g, `'${UpdatedAtDate}'`)
            .replace(/{{UpdatedAtTime}}/g, `'${UpdatedAtTime}'`)
            .replace(/{{createdAt}}/g, `'${createdAt}'`)
            .replace(/{{updatedAt}}/g, `'${updatedAt}'`);


        // Execute the query
        if (apiObject.data.apiInfo[step].pagination) {
            results = await executeQueryWithPagination(res, completeQuery, "", page, limit);
        } else {
            results = await executeQuery(res, completeQuery);
        }
        return sendResponse(res, 200, "Query Executed Successfully", {query : completeQuery, results : results});

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};

// Helper function to replace nested placeholders
const replaceNestedPlaceholders = (query, params) => {
    return query.replace(/{{(.*?)}}/g, (match, key) => {
        const keys = key.split('.'); // Split by dot for nested properties
        let value = params;

        // Navigate through the object based on the keys
        for (const k of keys) {
            if (value[k] !== undefined) {
                value = value[k];
            } else {
                return match; // Return the original match if the key doesn't exist
            }
        }

        // Format the value, wrapping strings in quotes
        if (typeof value === 'string') {
            return `'${value}'`; // Wrap string values in quotes
        } else if (value instanceof Date) {
            return `'${value.toISOString().slice(0, 19).replace('T', ' ')}'`; // Format date to SQL DATETIME
        }

        return value; // Return other types (like numbers) as they are
    });
};

module.exports = objectResolver;
