const projectDB = require("../../../databases/projectDb");
const { executeQuery } = require("../../../databases/queryExecution");

async function total_count(req, res){
    const query = `
        SELECT
            COUNT(*) as count
        FROM 
            roles
    `
    const connection = projectDB(); 
    const results = await executeQuery(res, query, "", connection);
    return results[0]?.count
}

module.exports = {total_count};