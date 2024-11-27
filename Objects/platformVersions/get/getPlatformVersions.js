const { total_count } = require("../../../UtilityFunctions/PayloadFunctions/platformVersions/getCount");

global.ListPlatformVersionsAll_object = {
    "versions": {
      "versionData": [
        {
          "=1.0": {
            "steps": [
              {
                "config": {
                  "features": {
                    "multistep": false,
                    "parameters": true,
                    "pagination": true
                  },
                  "communication": {
                    "encryption": {
                      "platformEncryption": true,
                      "accessTokenEncryption": false
                    }
                  },
                  "verification": {
                    "otp": false,
                    "accessToken": false
                  }
                },
                "data": {
                  "parameters": {
                    "fields": []
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "select",
                      "queryPayload": "SELECT * FROM platformversions",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": [total_count]
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "GET",
                    "permission": null,
                    "pagination": {
                      "limit": 10,
                      "offset": 0
                    }
                  }
                },
                "response": {
                  "successMessage": "Platform versions listed successfully!",
                  "errorMessage": "Error listing platform versions."
                }
              }
            ]
          }
        }
      ]
    }
  };
  