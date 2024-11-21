const {executeQuery} =  require("./queryExecution");
const getDateTime = require("../Constants/getDateTime");
const securityDB = require("./securityDB");
const sendResponse = require("../Constants/response")
async function LogError(req,res,statusCode,fileName,error, SCC){
   try{
    const connection = await securityDB();
    const [currentDateString,currentTimeString,currentDateTime] = getDateTime();;
    const Status="Active"
    const query = "INSERT INTO error_log  (ErrorMessage, fileName, createdAt, updatedAt, entryStatus, scc) VALUES (?,?,?,?,?,?)";
    const values = [error.toString(), fileName, currentDateTime,currentDateTime, Status, SCC];
    const results = await executeQuery(res, query, values, connection);
    sendResponse(res, statusCode, "An Error Occurred", error, SCC)
    console.log(error)
}
    catch(error)
    {

    }
}
module.exports = LogError;