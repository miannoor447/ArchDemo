const {executeQuery} =  require("../Constants/queryExecution");
const sendResponse = require('../Constants/response');
const getDateTime = require("../Constants/getDateTime");

async function LogError(req,res,fileName,error){
   try{
    const [currentDateString,currentTimeString,currentDateTime] = getDateTime();;
    const Status="Active"
    console.log("error:::",error)
    const query = "INSERT INTO errorlog (ErrorMessage, fileName, createdAt, updatedAt, Status) VALUES (?,?,?,?,?)";
    const values = [error.toString(), fileName, currentDateTime,currentDateTime, Status];
    const results = await executeQuery(res, query, values);
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