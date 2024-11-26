const connectToMyProj = require('../databases/projectDb');
const { executeQuery } = require('../databases/queryExecution');
const LogError = require('../databases/Errorlog');
const { decryptObject, encryptObject } = require('../Encryption/aes');
const logMessage = require('../LogFunctions/consoleLog');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

// Encryption function
const handleEncryption = async (req, res, object) => {
  let encryptionKey = '';
  let reqData = null;
  let decryptedPayload = "";
  let encryptionDetails = null;
  let PlatformName, PlatformVersion;
  const { config, data } = object;

  try {
    if (req.headers['encryptedrequest']){
      encryptedRequest = req.headers['encryptedrequest']
    }
    else if (Object.keys(req.body).length > 0){
      encryptedRequest = req.body.encryptedRequest;
    }
    else{
      const errorObject = {
        frameworkStatusCode: 'E14', // Missing Encrypted Payload or Encryption Details
        httpStatusCode: 400, // Bad Request
        description: "SSC: E14 => No req body provided",
      };
      return LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
    }
      ({ reqData, encryptionDetails } = decryptObject(encryptedRequest, process.env.SECRET_KEY));
      if ((!reqData && req.method != "GET") || !encryptionDetails) {
        const errorObject = {
          frameworkStatusCode: 'E10', // Missing Encrypted Payload or Encryption Details
          httpStatusCode: 400, // Bad Request
          description: "SSC: E10 => Missing Encrypted Payload or Encryption Details",
        };
        return LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
      }

      // Handle OTP-based encryption
      if (config.communication.encryption.accessToken) {
        const accessToken = req.headers['accesstoken']; // Access the header value
        encryptionKey += accessToken
      }
      
      // Handle platform encryption
      if (config.communication.encryption.platformEncryption) {
        ({ PlatformName, PlatformVersion } = encryptionDetails)
        if (!PlatformName || !PlatformVersion) {
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
          JOIN PlatformVersions pv ON p.PID = pv.PID
          JOIN versions v ON pv.VID = v.VID
          WHERE p.PlatformName = ? AND v.versionValue = ?
        `;
        const platformResults = await executeQuery(res, platformQuery, [PlatformName, PlatformVersion], projectDbConnection);
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
      if (reqData) {
        decryptedPayload = decryptObject(reqData, encryptionKey);
      }
      return {
        decryptedPayload,
        encryptionKey,
        PlatformName,
        PlatformVersion
      };
  } catch (error) {
    console.error(error);
    const errorObject = {
      frameworkStatusCode: 'E40', // Encryption Error
      httpStatusCode: 500, // Internal Server Error
      description: `SSC: E40 => Decryption Error: ${error.message}`,
    };
    LogError(req, res, errorObject.httpStatusCode, "platformEncryption", errorObject.description, errorObject.frameworkStatusCode);
  }
};

module.exports = handleEncryption;
