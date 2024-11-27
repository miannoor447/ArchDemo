const logMessage = require("../LogFunctions/consoleLog");
const { executeQuery } = require("./queryExecution");

async function executeQueryWithPagination(req, res, query, values, connection) {
    const { page_size = 10, page_no = 1, sort_by , sort_order, filter_columns = "[]", filter_values = "[]" } = req.query;

    const pageSize = parseInt(page_size, 10) || 10;
    const pageNo = parseInt(page_no, 10) || 1;
    const offset = (pageNo - 1) * pageSize;

    let parsedFilterColumns = [];
    let parsedFilterValues = [];

    try {
        parsedFilterColumns = JSON.parse(filter_columns);
        parsedFilterValues = JSON.parse(filter_values);
    } catch (err) {
        logMessage("Error parsing filter_columns or filter_values:", err);
    }

    let filterConditions = "";
    let filterParams = [];
    if (Array.isArray(parsedFilterColumns) && Array.isArray(parsedFilterValues) && parsedFilterColumns.length === parsedFilterValues.length) {
        parsedFilterColumns.forEach((column, index) => {
            filterConditions += ` AND ${column} LIKE ?`;
            filterParams.push(`%${parsedFilterValues[index]}%`);
        });
    }

    let sortingClause = "";
    if (sort_by) {
        const validSortOrder = sort_order.toUpperCase() === "DESC" ? "DESC" : "ASC";
        sortingClause = ` ORDER BY ${sort_by} ${validSortOrder}`;
    }

    const hasWhereClause = query.toLowerCase().includes("where");
    const conditionalQuery = hasWhereClause ? query : `${query} WHERE 1=1`;

    const finalQuery = `${conditionalQuery} ${filterConditions} ${sortingClause} LIMIT ?, ?`;
    const finalValues = [...values, ...filterParams, offset, pageSize];

    logMessage(finalQuery);
    logMessage(finalValues);
    const results = await executeQuery(res, finalQuery, finalValues, connection);
    logMessage(results)
    return results
}

module.exports = executeQueryWithPagination;
