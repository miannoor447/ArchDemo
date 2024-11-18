const {executeQuery} =  require("./queryExecution");
const sendResponse = require('../Constants/response');
const getDateTime = require("../Constants/getDateTime");
const errorDB = require("./errorDB");

async function LogError(req,res,fileName,error, SCC){
   try{
    const connection = await errorDB();
    const [currentDateString,currentTimeString,currentDateTime] = getDateTime();;
    const Status="Active"
    console.log("error:::",error)
    const query = "INSERT INTO errorlog (ErrorMessage, fileName, SCC, createdAt, updatedAt, Status) VALUES (?,?,?,?,?)";
    const values = [error.toString(), fileName, SCC, currentDateTime,currentDateTime, Status];
    const results = await executeQuery(res, query, values, connection);
    const response = { status: 500, message: `${fileName} Error Logged: ${error}`, payload:results };
    return sendResponse(res, response.status, response.message, response.payload);
}
    catch(error)
    {
        console.log(error)
        console.log("Unexpected Error Occured ")
    }
}
module.exports = LogError;