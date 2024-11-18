const connectToMyProj = require('../databases/projectDb');
const jwt = require('jsonwebtoken');
const { executeQuery } = require('../databases/queryExecution');
const { decryptObjectWithJWT } = require('../Encryption/jwt_decryption');
const LogError = require('../databases/Errorlog');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const handleEncryption = async (req, res, object) => {
  let encryptionKey = '';
  let decryptedPayload = req.body;
  let EncryptedPayload = null;
  let EncryptionDetails = null;
  const { config, data, response } = object;
  //NOTE: ENCRYPTIONKEY = OTP + PLATFORMKEY + STATIC
  try {
    //console.log(process.env.SECRET_KEY);
    // Decrypt the entire request body using SECRET_KEY to access EncryptedPayload and EncryptionDetails
    if (req.body && Object.keys(req.body).length > 0){
      console.log("Body:: " , req.body);
      const decryptedBody = jwt.verify(req.body.EncryptedPayload, process.env.SECRET_KEY);
      const { EncryptedPayload, EncryptionDetails } = decryptedBody;


      if (!EncryptedPayload || !EncryptionDetails) {
        const errorObject = {
          frameworkStatusCode: 'E10', // Missing Encrypted Payload or Encryption Details
          httpStatusCode: 400, // Bad Request
          description: "SSC: E10 => Missing Encrypted Payload or Encryption Details"
        };
        LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode)

      }
    
      if (config.communication.encryption.otpEncryption) {
        const email = EncryptionDetails.email;
        if (!email) {
          const errorObject = {
            frameworkStatusCode: 'E10', // Missing Email for OTP Encryption
            httpStatusCode: 400, // Bad Request
            description: "SSC: E10 => Email Not Present For Encryption"
          };
          LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode)

        }

        const projectDbConnection = connectToMyProj();
        const query = 'SELECT otp FROM users WHERE email = ?';
        const results = await executeQuery(res, query, [email], projectDbConnection);
        if (results.length > 0) {
          encryptionKey += results[0].otp;
        } else {
          const errorObject = {
            frameworkStatusCode: 'E10', // Invalid Email for OTP Encryption
            httpStatusCode: 400, // Bad Request
            description: "SSC: E10 => Invalid Email For Encryption"
          };
          LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode)

        }
      }

      // Handle platform encryption
      if (config.communication.encryption.platformEncryption) {
        const { platformName, platformVersion } = EncryptionDetails;
        if (!platformName || !platformVersion) {
          const errorObject = {
            frameworkStatusCode: 'E10', // Missing PlatformName or PlatformVersion for Encryption
            httpStatusCode: 400, // Bad Request
            description: "SSC: E10 => PlatformName or PlatformVersion Not Present For Encryption"
          };
          LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode)

        }

        const projectDbConnection = connectToMyProj();
        const platformQuery = `
          SELECT pv.EncryptionKey
          FROM platforms p
          JOIN platformversions pv ON p.PID = pv.PID
          JOIN versions v ON pv.VID = v.VID
          WHERE p.platformName = ? AND v.versionValue = ?
        `;
        const platformResults = await executeQuery(res, platformQuery, [platformName, platformVersion], projectDbConnection);
        if (platformResults.length > 0) {
          encryptionKey += platformResults[0].EncryptionKey;
        } else {
          const errorObject = {
            frameworkStatusCode: 'E10', // Invalid Platform Name or Version
            httpStatusCode: 400, // Bad Request
            description: "SSC: E10 => Invalid Platform Name or Version, Source: Platform Encryption"
          };
          LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode)
        }
      }
    }
    // Handle static encryption
    if (config.communication.encryption.staticEncryption) {
      encryptionKey += process.env.SECRET_KEY;
    }

    if (EncryptedPayload)
    {
      console.log("Encrypted Payload: " , EncryptedPayload)
      decryptedPayload = decryptObjectWithJWT(EncryptedPayload, encryptionKey);
    }

    return {
      decryptedPayload,
      encryptionKey
    };

  } catch (error) {
    // Catch any errors and send the response with an appropriate error code and message
    if (error.name === "JsonWebTokenError") {
      // JWT verification error
      const errorObject = {
        frameworkStatusCode: 'E40', // Invalid or Expired Token
        httpStatusCode: 401, // Unauthorized
        description: "SSC: E40 => JsonWebTokenError"
      };
      LogError(req, res, errorObject.httpStatusCode, "platformEncryption", error.message, errorObject.frameworkStatusCode)

    }

    if (errorObject.message.includes("Invalid Platform Name or Version")) {
      // Specific platform encryption error
      const errorObject = {
        frameworkStatusCode: 'E10', // Invalid Platform Name or Version
        httpStatusCode: 400, // Bad Request
        description: "SSC: E10 => Invalid Platform Name or Version, Source: Platform Encryption"
      };
      LogError(req, res, errorObject.httpStatusCode, "platformEncryption", error.message, errorObject.frameworkStatusCode)

    }

  }
};

module.exports = handleEncryption;
