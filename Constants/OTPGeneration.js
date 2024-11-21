const otpGenerator = require('otp-generator');
const sendEmail = require('./sendEmailOTP');
const getDateTime = require('./getDateTime');
const projectDB = require('../databases/projectDb')
const { executeQuery } = require('../databases/queryExecution');

async function OTPGeneration(res, email, deviceName) {
  try{
  let deviceId
  let connection = await projectDB();
  const OTP = otpGenerator.generate(6, { upperCaseAlphabets: true, specialChars: false });
  
  // Get current date and time
  const [currentDateString, currentTimeString, currentDateTime] = getDateTime();

  // Fetch the user's ID based on the email
  const userQuery = `SELECT user_id FROM users WHERE email = ?`;
  const userResult = await executeQuery(res, userQuery, [email], connection);
  if (userResult.length === 0) {
    throw new Error("User not found");
  }

  const userId = userResult[0].user_id;

  // Update the OTP in the userdevices table for the specified device and user
// Step 1: Query to get the device_id based on device_name
const deviceIdQuery = `
  SELECT device_id 
  FROM devices 
  WHERE device_name = ?
`;
connection = await projectDB();
const deviceResult = await executeQuery(res, deviceIdQuery, [deviceName], connection);

if (deviceResult.length === 0) {
    // Insert the new device into the devices table
    const insertDeviceQuery = `
        INSERT INTO devices (device_name)
        VALUES (?)
    `;
    connection = await projectDB();
    const insertDeviceResult = await executeQuery(res, insertDeviceQuery, [deviceName], connection);

    // Get the inserted device ID
    const newDeviceIdQuery = `
        SELECT device_id FROM devices WHERE device_name = ?
    `;
    const newDeviceResult = await executeQuery(res, newDeviceIdQuery, [deviceName], connection);
    const deviceId = newDeviceResult[0].device_id;

    // Insert into the userdevices table with userId and deviceId
    const insertUserDeviceQuery = `
        INSERT INTO userdevices (user_id, device_id)
        VALUES (?, ?)
    `;
    await executeQuery(res, insertUserDeviceQuery, [userId, deviceId], connection);
}

deviceId = deviceResult[0].device_id;

// Step 2: Update the OTP using the found device_id
const otpQuery = `
  UPDATE userdevices
  SET device_otp = ?, updatedAt = ?
  WHERE user_id = ? AND device_id = ?
`;
connection = await projectDB();
const otpResult = await executeQuery(res, otpQuery, [OTP, currentDateTime, userId, deviceId], connection);


  // Check if the OTP was updated
  if (otpResult.affectedRows === 0) {
    throw new Error("Failed to assign OTP. Device not associated with the user or invalid device ID.");
  }

  // Send the OTP via email
  await sendEmail(email, OTP, res);

  return OTP;}
  catch (error){
    throw new Error(error.message);
  }
}

module.exports = OTPGeneration;
