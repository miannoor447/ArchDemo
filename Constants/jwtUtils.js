const jwt = require('jsonwebtoken');
const sendResponse=require("./response")

function generateToken(res,payload,secretKey) {
 
 try{ token=jwt.sign(payload, secretKey);
  return token
 }catch(err){
  const response = { status: 500, message: "Error Generating Token", payload:err };
  return sendResponse(res, response.status, response.message, response.payload);
 }  
}

module.exports = generateToken;
