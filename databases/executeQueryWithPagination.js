const logMessage = require("../LogFunctions/consoleLog");
const {executeQuery}= require("./queryExecution")


async function executeQueryWithPagination(res, query, values, connection, page = 1, limit = 100) {
    const offset = (page - 1) * limit;
    const paginatedQuery = `${query} LIMIT ?, ?`;
    const paginatedValues = [...values, offset, limit];
    logMessage(paginatedQuery)
    return executeQuery(res, paginatedQuery, paginatedValues, connection);
  }

module.exports =  executeQueryWithPagination;