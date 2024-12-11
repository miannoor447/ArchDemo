const executeQueryWithPagination = require('../databases/executeQueryWithPagination.js');
const { executeQuery } = require('../databases/queryExecution.js');
const getPaginationParams = require('../Constants/getPaginationParams.js');
const LogError = require('../databases/Errorlog'); // Import LogError
const getDateTime = require("../Constants/getDateTime.js");
const projectDB = require('../databases/projectDb.js');
const logMessage = require('../LogFunctions/consoleLog.js');
const objectResolver = async (req, res, decryptedBody, apiObject) => {
    try {

        const { page, limit } = getPaginationParams(req);
        const [CreatedAtDate, CreatedAtTime] = getDateTime();
        const [UpdatedAtDate, UpdatedAtTime] = [CreatedAtDate, CreatedAtTime];
        const createdAt = CreatedAtDate + CreatedAtTime;
        const updatedAt = createdAt;

        // Ensure queryPayload is present
        const { queryPayload } = apiObject.data.apiInfo.query;
        if (!queryPayload) {
            return
        }

        // Create an object to hold parameter values
        const paramValues = {};

        // Replace placeholders in queryPayload
        let completeQuery = queryPayload;

        // Iterate over fields to extract values and replace placeholders
        for (const field of apiObject.data.parameters.fields) {
            const source = field.source; // Source of the parameter
            const name = field.name; // Name of the parameter

            // Depending on the source, extract the value
            if (source === "req.body" || source === "req.headers") {
                paramValues[name] = decryptedBody[name];
            } else if (source === "req.query") {
                paramValues[name] = req.query[name];
            }
        }
        logMessage(`PARAM Value: ${paramValues}`);
        completeQuery = replaceNestedPlaceholders(completeQuery, paramValues);
        // Add predefined values to the parameter values, ensuring they're quoted
        completeQuery = completeQuery
            .replace(/{{CreatedAtDate}}/g, `'${CreatedAtDate}'`)
            .replace(/{{CreatedAtTime}}/g, `'${CreatedAtTime}'`)
            .replace(/{{UpdatedAtDate}}/g, `'${UpdatedAtDate}'`)
            .replace(/{{UpdatedAtTime}}/g, `'${UpdatedAtTime}'`)
            .replace(/{{createdAt}}/g, `'${createdAt}'`)
            .replace(/{{updatedAt}}/g, `'${updatedAt}'`);

        // Execute the query with pagination or normal execution
        let results;
        if (apiObject.config.features.pagination) {
            const connection = await projectDB();
            results = await executeQueryWithPagination(req, res, completeQuery, "", connection, page, limit);
        } else {
            const connection = await projectDB();
            results = await executeQuery(res, completeQuery, "", connection);
            console.log("results", results);
        }

        return results;

    } catch (error) {
        console.error("Error in objectResolver:", error.message);
        console.log(error);
        // Ensure detailed error response with proper HTTP status
        const errorObject = {
            frameworkStatusCode: 'E24', // General error
            httpStatusCode: 500, // Internal Server Error
            description: `SSC: E24 => ${error.message || error.toString()}`
        }
        LogError(req, res, errorObject.httpStatusCode, "objectResolver", error.message, errorObject.frameworkStatusCode); 
        return;
    }
};

// Helper function to replace nested placeholders
const replaceNestedPlaceholders = (query, params) => {
    return query.replace(/{{(.*?)}}/g, (match, key) => {
        const keys = key.split('.'); // Split by dot for nested properties
        let value = params;
        // Navigate through the object based on the keys
        for (const k of keys) {
            logMessage(k);
         
         
            if (typeof value[k] === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value[k])) {
                // Split the string to format it into SQL DATETIME
                const [date, time] = value[k].split('T');
                const formattedTime = time.split('.')[0]; // Remove milliseconds
                value[k] = `${date} ${formattedTime}`;
            }
            
            if (value[k] !== undefined) {
                value = value[k];
            } else {
                logMessage("returning null")
                return 'NULL'; // Replace unresolved placeholders with NULL
            }
        }

        // Format the value, wrapping strings in quotes
        if (typeof value === 'string') {
            return `'${value}'`; // Wrap string values in quotes
        } else if (value instanceof Date ) {
          
            // Convert to SQL DATETIME format
            return `'${value.toISOString().split('T')[0]} ${value.toISOString().split('T')[1].split('.')[0]}'`;
        }
        return value; // Return other types (like numbers) as they are
    });
};

module.exports = objectResolver;
