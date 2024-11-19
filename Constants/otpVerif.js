const LogError = require("../databases/Errorlog");
const OTPGeneration = require("./OTPGeneration");
const isValidOTP = global["isValidOTP"]

async function otpVerif (req, res, decryptedBody){
    try{
        const {otp ,email, deviceName} = decryptedBody;
        let accessToken
        if (req.headers['accessToken']){
            accessToken = req.headers['accessToken'];
        }
        const {step} = req.query;
        console.log(step);
        if (step == "2"){
            if (accessToken){
                return await isValidAccessToken(req, res, accessToken);
            }
            return (await isValidOTP(req, res, otp)); 
        }
        else {
            await OTPGeneration(res, email, deviceName);
            return "OTP Sent Successfully"
        }
    }
    catch (error){
      console.log(error);
      LogError(req, res, 500, otpVerif, error.message, "E42")
      throw new Error(error.message);
    }
}


module.exports = otpVerif