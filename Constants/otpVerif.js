const LogError = require("../databases/Errorlog");
const verifyToken = require("./auth");
const generatePayload = require("./generatePayload");
const OTPGeneration = require("./OTPGeneration");
const generateToken = require('./jwtUtils');
const projectDB = require("../databases/projectDb");
const { executeQuery } = require("./queryExecution");
const logMessage = require("../LogFunctions/consoleLog");
async function isValidAccessToken(res, accessToken, decryptedBody) {
    const query = `
    SELECT 
      u.user_id, 
      u.email,
      ud.device_otp,
      ud.device_id, 
      ud.device_token, 
      d.device_name
    FROM 
      users u
    INNER JOIN 
      userdevices ud 
      ON u.user_id = ud.user_id
    INNER JOIN 
      devices d 
      ON ud.device_id = d.device_id
    WHERE 
      d.device_name = ? 
      AND ud.device_token = ? 
      AND u.email = ?
    `;
    try {
      const result = await executeQuery(res, query, [decryptedBody.deviceName, accessToken, decryptedBody.email]);

      logMessage(result);
      if (result.length > 0) {
        return verifyOTP(res, result[0].device_otp, decryptedBody)
      }

      logMessage(`Values : ${[decryptedBody.deviceName, accessToken, decryptedBody.email]}`)
      throw new Error("Invalid access token or device name");
    } catch (error) {
      throw new Error(`Error validating access token: ${error.message}`);
    }
}
async function verifyOTP(res, OTP, decryptedBody) {
  const { email, deviceName} = decryptedBody;
  let connection = await projectDB();

  // Fetch user details
  const userQuery = `SELECT * FROM users WHERE email = ?`;
  const userResult = await executeQuery(res, userQuery, [email], connection);

  if (userResult.length === 0) {
    throw new Error("User not found");
  }

  const userId = userResult[0].user_id;

  // Validate OTP in the userdevices table
  const otpQuery = `
    SELECT * FROM userdevices ud
    JOIN devices d ON ud.device_id = d.device_id 
    WHERE ud.user_id = ? AND ud.device_otp = ? AND d.device_name = ?
  `;
  connection = await projectDB();
  const otpResult = await executeQuery(res, otpQuery, [userId, OTP, deviceName], connection);

  if (otpResult.length === 0) {
    throw new Error("Invalid OTP");
  }

  // Fetch roles for the user
  const rolesQuery = `
    SELECT r.*
    FROM userroles ur
    INNER JOIN roles r ON ur.role_id = r.role_id
    WHERE ur.user_id = ?
  `;
  connection = await projectDB();
  const rolesResult = await executeQuery(res, rolesQuery, [userId], connection);

  // Fetch devices associated with the user
  const devicesQuery = `SELECT * FROM userdevices WHERE user_id = ?`;
  connection = await projectDB();
  const devicesResult = await executeQuery(res, devicesQuery, [userId], connection);

  const currentDeviceQuery = `
  SELECT * 
  FROM userdevices ud 
  JOIN devices d ON ud.device_id = d.device_id 
  WHERE ud.user_id = ? AND d.device_name = ?
  `;
  connection = await projectDB();
  const currentDeviceResult = await executeQuery(res, currentDeviceQuery, [userId, deviceName], connection);

  deviceId = currentDeviceResult[0].device_id;

  // Generate token
  const payload = await generatePayload(userId, deviceId, OTP);
  const token = await generateToken(res, payload, process.env.SECRET_KEY);

  // Store the generated token in device_token
  const updateTokenQuery = `
    UPDATE userdevices 
    SET device_token = ? 
    WHERE user_id = ? AND device_id = ?
  `;
  connection = await projectDB();
  await executeQuery(res, updateTokenQuery, [token, userId, deviceId], connection);

  // Build return object
  const returnObject = {
    users: userResult,
    roles: rolesResult,
    devices: devicesResult,
    accessToken: token
  };

  return returnObject;
}



  
  
async function otpVerif (req, res, decryptedBody){
    try{
        let otp, email, deviceName, accessToken;

        const {step} = req.query;
        if (step == "2"){
          ({otp ,email, deviceName} = decryptedBody)

            return (await verifyOTP(res, otp, decryptedBody)); 
        }
        else {
          if (req.headers['accesstoken']){
            accessToken = req.headers['accesstoken'];
            logMessage(accessToken)
            if (accessToken && accessToken != 'null'){
              return await isValidAccessToken(res, accessToken, decryptedBody);
            }
          }
            ({email, deviceName} = decryptedBody);
            await OTPGeneration(res, email, deviceName);
            return "OTP Sent Successfully"
        }
    }
    catch (error){
      LogError(req, res, 500, otpVerif, error.message, "E42")
      throw new Error(error.message);
    }
}


module.exports = otpVerif