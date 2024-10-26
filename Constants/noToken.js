const sendResponse=require("./response")

function noTokenFound(res)
{
    const response={status:401,message:"No token Found",payload:""};
    return sendResponse(res,response.status,response.message,response.payload) 
   
}
module.exports=noTokenFound;