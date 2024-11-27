const { total_count } = require("../../../UtilityFunctions/PayloadFunctions/permissions/getCount");

global.ListPermissionsAll_object = {
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
                    "fields": [
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "select",
                      "queryPayload": "SELECT permission_id AS id, permissions.*  FROM permissions",
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
                  "successMessage": "Permissions listed successfully!",
                  "errorMessage": "Error listing permissions."
                }
              }
            ]
          }
        }
      ]
    }
  };
  