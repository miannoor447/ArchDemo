const { total_count } = require("../../../../UtilityFunctions/PayloadFunctions/users/getCount");

global.ListUsersAll_object = {
  "versions": {
    "versionData": [{
      "=1.0": {
        "steps": [{
          "config": {
            "features": {
              "multistep": false,
              "parameters": true,
              "pagination": true
            },
            "communication": {
              "encryption": {
                "platformEncryption": true,
                "accessTokenEncryption": false,
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
                "queryNature": "SELECT",
                "queryPayload": "SELECT user_id AS id, users.* FROM users",
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
                "pageSize": 10,
                
              }
            }
          },
          "response": {
            "successMessage": "Users retrieved successfully!",
            "errorMessage": "Failed to retrieve users."
          }
        }]
      }
    }]
  }
};
