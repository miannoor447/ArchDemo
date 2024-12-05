global.ListUsers_object = {
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
              // "encryption": {
              //   "platformEncryption": false,
              //   "accessTokenEncryption": false
              // },
              "encryption": false
            },
            "verification": {
              "otp": false,
              "accessToken": false
            }
          },
          "data": {
            "parameters": {
              "fields": [
                {
                  "name": "userId",
                  "validations": [],
                  "required": true,
                  "source": "req.query"
                }
              ]
            },
            "apiInfo": {
              "query": {
                "queryNature": "SELECT",
                "queryPayload": "select * from users where {{userId}} IS NULL OR user_id = {{userId}}" ,
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
