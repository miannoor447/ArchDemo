const connectToMyProj = require('../databases/projectDb');
const jwt = require('jsonwebtoken');
const { executeQuery } = require('../databases/queryExecution');
require('dotenv').config();

// Function for handling version checking
const handleVersionChecking = async (req, res, object) => {
  try {
    let { version } = req.query;
    if (!version) {
      // Error: Missing version parameter
      const errorObject = {
        frameworkStatusCode: 'E10', // Parameter Missing in Source
        httpStatusCode: 400, // Bad Request
        description: "SSC: E10 => Version Not Found"
      };
    }

    version = parseFloat(version);
    const versionData = object.versions.versionData;

    let selectedVersion = null;

    // Loop through version data to find matching version
    for (let i = 0; i < versionData.length; i++) {
      const versionKey = Object.keys(versionData[i])[0];
      const versionCondition = versionKey.replace('=', '').trim();
      const [start, end] = versionKey.split('&').map(str => str.trim());

      let satisfiesCondition = false;
      //console.log("Version: " , version, "  versionCondition: ", versionCondition, " start: ", start);
      // Check for version conditions
      if (start.includes('>') && start.includes('<')) {
        const [lower, upper] = start.includes('>=') ? [parseFloat(start.slice(2)), parseFloat(end.slice(1))] : [parseFloat(start.slice(1)), parseFloat(end.slice(1))];
        satisfiesCondition = (version >= lower && version < upper);
      } else if (start.includes('>')) {
        satisfiesCondition = start.includes('=') ? version >= parseFloat(start.slice(2)) : version > parseFloat(start.slice(1));
      } else if (start.includes('<')) {
        satisfiesCondition = start.includes('=') ? version <= parseFloat(start.slice(2)) : version < parseFloat(start.slice(1));
      } else if (start.includes('=')) {
        satisfiesCondition = version === parseFloat(start.slice(1));
      }

      // If version satisfies the condition, set the selected version
      if (satisfiesCondition) {
        selectedVersion = versionData[i][versionKey];
        break;
      }
    }

    if (!selectedVersion) {
      // Error: Version not found in configuration
      const errorObject = {
        frameworkStatusCode: 'E50', // API Version Does Not Exist
        httpStatusCode: 404, // Not Found
        description: "SSC: E50 => Matching version configuration not found"
      };
    }

    const { config, data, response } = selectedVersion;
    return {
      config,
      data,
      response
    };

  } catch (error) {
    // Internal server error handling
    const errorObject = {
      frameworkStatusCode: 'E24', // Payload Function Error
      httpStatusCode: 500, // Internal Server Error
      description: `SSC: E24 => ${error.message || error.toString()}`
    };
  }
};

module.exports = handleVersionChecking;
