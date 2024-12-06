global.AddUserDeviceNotification_object = {
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
                  {
                    "name": "user_device_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                  },
                  {
                    "name": "notification_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                  },
                ]
              },
              "apiInfo": {
                "query": {
                  "queryNature": "insert",
                  "queryPayload": "INSERT INTO user_device_notifications (user_device_id, notification_id, status) VALUES ({{user_device_id}}, {{notification_id}}, `Active`",
                  "database": "projectDB"
                },
                "utilityFunctions": {
                  "callbackFunction": null,
                  "payloadFunction": []
                }
              },
              "requestMetaData": {
                "requestMethod": "POST",
                "permission": null,
                "pagination": {}
              }
            },
            "response": {
              "successMessage": "User device notification added successfully!",
              "errorMessage": "Error adding user device notification."
            }
          }]
        }
      }]
    }
  };
  