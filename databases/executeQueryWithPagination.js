const logMessage = require("../LogFunctions/consoleLog");
const LogError = require("./Errorlog");
const projectDB = require("./projectDb");
const { executeQuery } = require("./queryExecution");

async function executeQueryWithPagination(req, res, query, values, connection) {
    try {
        const { page_size, page_no = 1, sort_by, sort_order, filter_columns_and = "[]", filter_values_and = "[]", filter_columns_or = "[]", filter_values_or = "[]" } = req.query;
        const pageSize = parseInt(page_size, 10) || 'All';
        const pageNo = parseInt(page_no, 10) || 1;

        if (pageSize <= 0 && pageSize != 'All') {
            LogError(req, res, 400, "executeQueryWithPagination", "Invalid Page Size Provided", "E39");
            return;
        }

        if (pageNo <= 0) {
            LogError(req, res, 400, "executeQueryWithPagination", "Invalid Page No Provided", "E39");
            return;
        }

        const offset = (pageNo - 1) * pageSize;

        let parsedFilterColumnsAnd = [];
        let parsedFilterValuesAnd = [];

        try {
            parsedFilterColumnsAnd = JSON.parse(filter_columns_and);
            parsedFilterValuesAnd = JSON.parse(filter_values_and);
        } catch (err) {
            LogError(req, res, 400, "executeQueryWithPagination", "Error parsing filter_columns_and or filter_values_and:" + err, "E39");
        }

        let filterConditionsAnd = "";
        let filterParamsAnd = [];
        if (Array.isArray(parsedFilterColumnsAnd) && Array.isArray(parsedFilterValuesAnd) && parsedFilterColumnsAnd.length === parsedFilterValuesAnd.length) {
            parsedFilterColumnsAnd.forEach((column, index) => {
                filterConditionsAnd += ` AND ${column} LIKE ?`;
                filterParamsAnd.push(`%${parsedFilterValuesAnd[index]}%`);
            });
        }

        let parsedFilterColumnsOr = [];
        let parsedFilterValuesOr = [];

        try {
            parsedFilterColumnsOr = JSON.parse(filter_columns_or);
            parsedFilterValuesOr = JSON.parse(filter_values_or);
        } catch (err) {
            LogError(req, res, 400, "executeQueryWithPagination", "Error parsing filter_columns_or or filter_values_or:" + err, "E39");
        }

        let filterConditionsOr = "";
        let filterParamsOr = [];

        if (Array.isArray(parsedFilterColumnsOr) && Array.isArray(parsedFilterValuesOr) && parsedFilterColumnsOr.length === parsedFilterValuesOr.length) {
            if (parsedFilterColumnsOr.includes('all')) {
                const tableName = query.split('FROM')[1].split(' ')[1].trim();  // Extract table name from query
                const columnQuery = `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = 'projectdb' AND TABLE_NAME = ?`;
                const connection = projectDB();
                const columns = await executeQuery(res, columnQuery, [tableName], connection);
                
                columns.forEach(({ COLUMN_NAME }) => {
                    parsedFilterColumnsOr.push(COLUMN_NAME);
                    filterConditionsOr += ` OR ${COLUMN_NAME} LIKE ?`;
                    filterParamsOr.push(`%${parsedFilterValuesOr[0]}%`);  
                });
            } else {
                parsedFilterColumnsOr.forEach((column, index) => {
                    filterConditionsOr += ` OR ${column} LIKE ?`;
                    filterParamsOr.push(`%${parsedFilterValuesOr[index]}%`);
                });
            }
        }

        let sortingClause = "";
        if (sort_by) {
            const validSortOrder = sort_order.toUpperCase() === "DESC" ? "DESC" : "ASC";
            sortingClause = ` ORDER BY ${sort_by} ${validSortOrder}`;
        }

        const hasWhereClause = query.toLowerCase().includes("where");

        let conditionalQuery = query;
        if (!hasWhereClause) {
            if (filterConditionsOr && filterConditionsOr.startsWith(' OR ')) {
                filterConditionsOr = filterConditionsOr.slice(4);
                conditionalQuery = `${query} WHERE`;
            }
            else if (filterConditionsAnd && filterConditionsAnd.startsWith(' AND ')) {
                filterConditionsAnd = filterConditionsAnd.slice(5); 
                conditionalQuery = `${query} WHERE`;
            }
        }



        let finalQuery;
        let finalValues;
        if (pageSize !== 'All') {
            finalQuery = `${conditionalQuery} ${filterConditionsOr} ${filterConditionsAnd} ${sortingClause} LIMIT ?, ?`;
            finalValues = [...values, ...filterParamsOr, ...filterParamsAnd, offset, pageSize];
        } else {
            finalQuery = `${conditionalQuery} ${filterConditionsOr} ${filterConditionsAnd} ${sortingClause}`;
            finalValues = [...values, ...filterParamsOr, ...filterParamsAnd];
        }

        const results = await executeQuery(res, finalQuery, finalValues, connection);
        return results;
    }
    catch(err){
        throw new Error(err.message);
    }
}

module.exports = executeQueryWithPagination;
