const {executeQuery} =  require("./queryExecution");
const getDateTime = require("../Constants/getDateTime");
const errorDB = require("./errorDB");
const sendResponse = require("../Constants/response")
async function LogError(req,res,statusCode,fileName,error, SCC){
   try{
    const connection = await errorDB();
    const [currentDateString,currentTimeString,currentDateTime] = getDateTime();;
    const Status="Active"
    console.log("error:::",error)
    const query = "INSERT INTO errorlog (ErrorMessage, fileName, createdAt, updatedAt, Status, scc) VALUES (?,?,?,?,?,?)";
    const values = [error.toString(), fileName, currentDateTime,currentDateTime, Status, SCC];
    const results = await executeQuery(res, query, values, connection);
    sendResponse(res, statusCode, "An Error Occurred", error)
}
    catch(error)
    {
        console.log(error)
        console.log("Unexpected Error Occured ")
    }
}
module.exports = LogError;