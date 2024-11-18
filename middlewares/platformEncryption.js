const connectToMyProj = require('../databases/projectDb');
const jwt = require('jsonwebtoken');
const { executeQuery } = require('../databases/queryExecution');
const { decryptObjectWithJWT } = require('../Encryption/jwt_decryption');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const handleEncryption = async (req, res, object) => {
  let encryptionKey = '';
  let decryptedPayload = req.body;
  const { config, data, response } = object;
  //NOTE: ENCRYPTIONKEY = OTP + PLATFORMKEY + STATIC
  try {
    //console.log(process.env.SECRET_KEY);
    // Decrypt the entire request body using SECRET_KEY to access EncryptedPayload and EncryptionDetails
    const decryptedBody = jwt.verify(req.body.EncryptedPayload, process.env.SECRET_KEY);
    const { EncryptedPayload, EncryptionDetails } = decryptedBody;

    if (!EncryptedPayload || !EncryptionDetails) {
      const errorObject = {
        frameworkStatusCode: 'E10', // Missing Encrypted Payload or Encryption Details
        httpStatusCode: 400, // Bad Request
        description: "SSC: E10 => Missing Encrypted Payload or Encryption Details"
      };
    }

    // Handle OTP encryption
    if (config.communication.encryption.otpEncryption) {
      const email = EncryptionDetails.email;
      if (!email) {
        const errorObject = {
          frameworkStatusCode: 'E10', // Missing Email for OTP Encryption
          httpStatusCode: 400, // Bad Request
          description: "SSC: E10 => Email Not Present For Encryption"
        };
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
      }
    }

    // Handle static encryption
    if (config.communication.encryption.staticEncryption) {
      encryptionKey += process.env.SECRET_KEY;
    }

    // Decrypt EncryptedPayload
    decryptedPayload = decryptObjectWithJWT(EncryptedPayload, encryptionKey);

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
        description: "SSC: E40 => Invalid Payload"
      };
    }

    if (error.message.includes("Invalid Platform Name or Version")) {
      // Specific platform encryption error
      const errorObject = {
        frameworkStatusCode: 'E10', // Invalid Platform Name or Version
        httpStatusCode: 400, // Bad Request
        description: "SSC: E10 => Invalid Platform Name or Version, Source: Platform Encryption"
      };
    }

    // Generic error handling
    const errorObject = {
      frameworkStatusCode: 'E43', // General error
      httpStatusCode: 500, // Internal Server Error
      description: `SSC: E43 => ${error.message || error.toString()}`
    };
  }
};

module.exports = handleEncryption;
