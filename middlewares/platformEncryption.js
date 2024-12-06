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
      logMessage("Extracting ER from headers")
    }
    else if (Object.keys(req.body).length > 0){
      encryptedRequest = req.body.encryptedRequest;
      logMessage("Extracting ER from body")

    }
    else{
      const errorObject = {
        frameworkStatusCode: 'E14', // Missing Encrypted Payload or Encryption Details
        httpStatusCode: 400, // Bad Request
        description: "SSC: E14 => No req body provided",
      };
      throw new Error(errorObject.description);
    }
      ({ reqData, encryptionDetails } = decryptObject(encryptedRequest, process.env.SECRET_KEY));
      if ((!reqData && req.method != "GET") || !encryptionDetails) {
        const errorObject = {
          frameworkStatusCode: 'E10', // Missing Encrypted Payload or Encryption Details
          httpStatusCode: 400, // Bad Request
          description: "SSC: E10 => Missing Encrypted Payload or Encryption Details",
        };
        throw new Error(errorObject.description);
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
          throw new Error(errorObject.description);

        }
        const projectDbConnection = connectToMyProj();
        const platformQuery = `
          SELECT pv.encryption_key
          FROM platforms p
          JOIN platform_versions pv ON p.platform_id = pv.platform_id
          JOIN version v ON pv.version_id = v.version_id
          WHERE p.platform_name = ? AND v.version = ?
        `;
        const platformResults = await executeQuery(res, platformQuery, [PlatformName, PlatformVersion], projectDbConnection);
        if (platformResults.length > 0) {
          encryptionKey += platformResults[0].encryption_key;
        } else {
          const errorObject = {
            frameworkStatusCode: 'E10', // Invalid Platform Name or Version
            httpStatusCode: 400, // Bad Request
            description: "SSC: E10 => Invalid Platform Name or Version, Source: Platform Encryption",
          };
          throw new Error(errorObject.description);
        }
      }
      if (reqData) {
        logMessage([reqData, encryptionKey])
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
    throw new Error(errorObject.description);
  }
};

module.exports = handleEncryption;
