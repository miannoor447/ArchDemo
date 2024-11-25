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
              "accessToken": true
            }
          },
          "data": {
            "parameters": {
              "fields": []
            },
            "apiInfo": {
              "query": {
                "queryNature": "SELECT",
                "queryPayload": "select * from users",
                "database": "projectDB"
              },
              "utilityFunctions": {
                "callbackFunction": null,
                "payloadFunction": []
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
