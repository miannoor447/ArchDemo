const connectToMyProj = require('../databases/projectDb');
const { executeQuery } = require('../databases/queryExecution');
const LogError = require('../databases/Errorlog');
const { decryptObject } = require('../Encryption/aes');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

// Encryption function
const handleEncryption = async (req, res, object) => {
  let encryptionKey = '';
  let decryptedPayload = req.body.EncryptedPayload;
  const { config, data } = object;

  try {
    if (req.body && Object.keys(req.body).length>0) {
      console.log("Body::", req.body);
      const { EncryptedPayload, EncryptionDetails } = decryptObject(decryptedPayload, process.env.SECRET_KEY);

      if (!EncryptedPayload || !EncryptionDetails) {
        const errorObject = {
          frameworkStatusCode: 'E10', // Missing Encrypted Payload or Encryption Details
          httpStatusCode: 400, // Bad Request
          description: "SSC: E10 => Missing Encrypted Payload or Encryption Details",
        };
        return LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
      }

      // Handle OTP-based encryption
      if (config.communication.encryption.otpEncryption) {
        const email = EncryptionDetails.email;
        if (!email) {
          const errorObject = {
            frameworkStatusCode: 'E10', // Missing Email for OTP Encryption
            httpStatusCode: 400, // Bad Request
            description: "SSC: E10 => Email Not Present For Encryption",
          };
          return LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
        }
      
        const projectDbConnection = connectToMyProj();
        
        // Updated SQL query to join users, userdevices, and devices tables
        const query = `
          SELECT devices.device_otp 
          FROM users 
          JOIN userdevices ON users.userId = userdevices.user_id 
          JOIN devices ON userdevices.device_id = devices.device_id
          WHERE users.email = ? AND devices.entryStatus = 'active' 
          LIMIT 1;
        `;
        
        const results = await executeQuery(res, query, [email], projectDbConnection);
        
        if (results.length > 0) {
          // Add the OTP from the device to the encryption key
          encryptionKey += results[0].device_otp;
        } else {
          const errorObject = {
            frameworkStatusCode: 'E10', // Invalid Email or No Active Device for OTP Encryption
            httpStatusCode: 400, // Bad Request
            description: "SSC: E10 => Invalid Email or No Active Device For Encryption",
          };
          return LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
        }
      }
      
      // Handle platform encryption
      if (config.communication.encryption.platformEncryption) {
        const { platformName, platformVersion } = EncryptionDetails;
        if (!platformName || !platformVersion) {
          const errorObject = {
            frameworkStatusCode: 'E10', // Missing PlatformName or PlatformVersion for Encryption
            httpStatusCode: 400, // Bad Request
            description: "SSC: E10 => PlatformName or PlatformVersion Not Present For Encryption",
          };
          return LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
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
            description: "SSC: E10 => Invalid Platform Name or Version, Source: Platform Encryption",
          };
          return LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
        }
      }

      // Handle static encryption
      if (config.communication.encryption.staticEncryption) {
        encryptionKey += process.env.SECRET_KEY;
      }

      // Decrypt the payload
      if (EncryptedPayload) {
        console.log("Encrypted Payload:", EncryptedPayload);
        decryptedPayload = decryptObject(EncryptedPayload, encryptionKey);
      }

      return {
        decryptedPayload,
        encryptionKey,
      };
    } else {
      const errorObject = {
        frameworkStatusCode: 'E10', // Missing Encrypted Payload or Encryption Details
        httpStatusCode: 400, // Bad Request
        description: "SSC: E10 => Missing Encrypted Payload or Encryption Details",
      };
      LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
    }
  } catch (error) {
    const errorObject = {
      frameworkStatusCode: 'E40', // Encryption Error
      httpStatusCode: 500, // Internal Server Error
      description: `SSC: E40 => Encryption Error: ${error.message}`,
    };
    LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
  }
};

module.exports = handleEncryption;
