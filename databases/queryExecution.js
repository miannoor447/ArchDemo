const logMessage = require("../LogFunctions/consoleLog");

async function executeQuery(res, query, values, connection) {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, result) => {
      logMessage("Executing Query:", query);
      logMessage("With Values:", values);
      connection.end();
      
      if (err) {
        // Log the error and reject the promise
        logMessage("Error Executing the Query:", err);
        reject(new Error("Error executing the query. Please try again later."));
        return; // Avoid further execution
      }

      // Resolve the promise with the result
      resolve(result);
    });
  });
}

module.exports = { executeQuery };
