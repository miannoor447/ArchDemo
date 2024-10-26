const otpGenerator = require('otp-generator');
const sendEmail=require('./sendEmailOTP');
const getDateTime = require('./getDateTime');
const { executeQuery } = require('./queryExecution');


async function OTPGeneration(res, email) {
  const OTP = otpGenerator.generate(6, { upperCaseAlphabets: true, specialChars: false });
  const [currentDateString,currentTimeString,currentDateTime] = getDateTime();
  const query = `
    UPDATE users 
    SET Otp = ?, updatedAt = ?
    WHERE Email = ?`;
  const result = await executeQuery(res, query,[OTP,currentDateTime,email]);
  sendEmail(email, OTP);
  return OTP;
}
module.exports = OTPGeneration;
