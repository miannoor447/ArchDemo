const {decryptArray,decryptObject} = require('./Decryption.js');
async function sendResponse(res, status, message, payload) {
  if (payload && Array.isArray(payload)) {
    payload = await decryptArray(payload); 
  }
  // else if (payload && typeof payload =='object')
  // {
  //   payload=await decryptObject(payload)
  // }
   const response = {
    status: status,
    message: message,
    payload: payload
  };
  
  res.status(status).json(response);
}

module.exports = sendResponse;