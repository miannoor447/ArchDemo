const logMessage = require("../LogFunctions/consoleLog");

async function executeQuery(res, query, values, connection) {
  return new Promise((resolve, reject) => {
   connection.query(query, values, (err, result) => {
      logMessage(query);
      logMessage(values);
      connection.end();
      if (err) {
        reject(err);
        throw new Error ("Error Executing the query: " + err)
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {executeQuery};
