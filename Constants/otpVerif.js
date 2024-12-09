const LogError = require("../databases/Errorlog");
const verifyToken = require("./auth");
const generatePayload = require("./generatePayload");
const OTPGeneration = require("./OTPGeneration");
const generateToken = require('./jwtUtils');
const projectDB = require("../databases/projectDb");
const { executeQuery } = require("../databases/queryExecution");

async function isValidAccessToken(res, accessToken, decryptedBody) {
    const query = `
    SELECT 
      u.user_id, 
      u.email,
      do.otp,
      ud.user_device_id, 
      ud.device_token, 
      ud.device_name
    FROM 
      users u
    INNER JOIN 
      user_devices ud 
      ON u.user_id = ud.user_id
    INNER JOIN 
      device_otp do
      ON ud.user_device_id = do.user_device_id
    WHERE 
      ud.device_token = ? 
      AND u.email = ? 
      AND ud.device_name = ?
    `;
    try {
        const connection = await projectDB();
        const result = await executeQuery(res, query, [accessToken, decryptedBody.email, decryptedBody.device_name], connection);
        if (result.length > 0) {
            return verifyOTP(res, result[0].otp, decryptedBody, 0);
        }
        throw new Error("Invalid access token or device name");
    } catch (error) {
        throw new Error(`Error validating access token: ${error.message}`);
    }
}

async function verifyOTP(res, OTP, decryptedBody, updatedFlag = 1) {
    const { email, device_name } = decryptedBody;
    let connection = await projectDB();

    // Fetch user details
    const userQuery = `SELECT user_id FROM users WHERE email = ?`;
    const userResult = await executeQuery(res, userQuery, [email], connection);

    if (userResult.length === 0) {
        throw new Error("User not found");
    }

    const userId = userResult[0].user_id;

    // Validate OTP in the device_otp table
    const otpQuery = `
    SELECT * 
    FROM device_otp do
    INNER JOIN user_devices ud ON do.user_device_id = ud.user_device_id
    WHERE ud.user_id = ? AND do.otp = ? AND ud.device_name = ?
    `;
    connection = await projectDB();
    const otpResult = await executeQuery(res, otpQuery, [userId, OTP, device_name], connection);
    if (otpResult.length === 0 && false) {
        throw new Error("Invalid OTP");
    }

    const deviceId = otpResult[0].user_device_id;

    // Generate token
    const payload = await generatePayload(userId, deviceId, OTP);
    const token = await generateToken(res, payload, process.env.SECRET_KEY);

    // Store the generated token in device_token
    if (updatedFlag) {
        const updateTokenQuery = `
        UPDATE user_devices 
        SET device_token = ? 
        WHERE user_id = ? AND user_device_id = ?
        `;
        connection = await projectDB();
        await executeQuery(res, updateTokenQuery, [token, userId, deviceId], connection);
    }

    // Build return object
    const returnObject = {
        userId: userResult[0].user_id,
        deviceName: device_name,
        accessToken: token,
    };

    return returnObject;
}

async function otpVerif(req, res, decryptedBody) {
    try {
        const { step } = req.query;
        if (step == "2") {
            const { otp } = decryptedBody;
            return await verifyOTP(res, otp, decryptedBody);
        } else {
            try {
                const accessToken = req.headers['accesstoken'];
                if (accessToken && accessToken !== 'null') {
                    return await isValidAccessToken(res, accessToken, decryptedBody);
                }
                const { email, device_name } = decryptedBody;
                await OTPGeneration(res, email, device_name);
                return "OTP Sent Successfully";
            } catch (error) {
                const { email, device_name } = decryptedBody;
                await OTPGeneration(res, email, device_name);
                return "OTP Sent Successfully";
            }
        }
    } catch (error) {
        LogError(req, res, 500, otpVerif, error.message, "E42");
        throw new Error(error.message);
    }
}

module.exports = otpVerif;
