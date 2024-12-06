global.GetUserDeviceNotification_object = {
    "versions": {
      "versionData": [{
        "=1.0": {
          "steps": [{
            "config": {
              "features": {
                "multistep": false,
                "parameters": true,
                "pagination": false
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
                  "queryPayload": "SELECT * FROM user_device_notifications",
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
                "pagination": {}
              }
            },
            "response": {
              "successMessage": "User device notification retrieved successfully!",
              "errorMessage": "Error retrieving user device notification."
            }
          }]
        }
      }]
    }
  };
  