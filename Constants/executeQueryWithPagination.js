const {executeQuery}= require("./queryExecution")


async function executeQueryWithPagination(res, query, values, page = 1, limit = 100) {

    const offset = (page - 1) * limit;
    const paginatedQuery = `${query} LIMIT ?, ?`;
    const paginatedValues = [...values, offset, limit];
    return executeQuery(res, paginatedQuery, paginatedValues);
  }

module.exports =  executeQueryWithPagination;