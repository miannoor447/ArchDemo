const logMessage = require("../LogFunctions/consoleLog");
const LogError = require("./Errorlog");

async function executeQuery(res, query, values, connection) {
  return new Promise((resolve, reject) => {
   connection.query(query, values, (err, result) => {
      connection.end();
      if (err) {
        LogError(null, res, 500, "queryExecution", `Error in query execution::${err}`, null)
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {executeQuery};
