const OTPGeneration = require("./OTPGeneration");
const isValidOTP = global["isValidOTP"]

async function otpVerif (req, res, decryptedBody){
    try{
        const { otp ,email} = decryptedBody;
        const {step} = decryptedBody || req.query;
        if (step == "2"){
            validation = await isValidOTP(req, res, otp); 
        }
        else {
            OTPGeneration(res, email);
        }
    }
    catch (error){
        console.log(error);
        throw new Error(error.message);
    }
}


module.exports = otpVerif