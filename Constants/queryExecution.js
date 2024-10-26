const connectToMySql = require("./db");

async function executeQuery(res, query, values) {
   const connection = await connectToMySql();
  return new Promise((resolve, reject) => {
   connection.query(query, values, (err, result) => {
      connection.end();
      if (err) {
        //console.log("Error in query execution::",err)
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {executeQuery};
