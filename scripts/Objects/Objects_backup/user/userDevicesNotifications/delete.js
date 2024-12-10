global.DeleteUserDeviceNotification_object = {
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
                    "name": "user_device_notification_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                  }
                ]
              },
              "apiInfo": {
                "query": {
                  "queryNature": "DELETE",
                  "queryPayload": "UPDATE user_device_notifications SET entry = 'inactive' WHERE user_device_notification_id = {{user_device_notification_id}}",
                  "database": "projectDB"
                },
                "utilityFunctions": {
                  "callbackFunction": null,
                  "payloadFunction": []
                }
              },
              "requestMetaData": {
                "requestMethod": "DELETE",
                "permission": null,
                "pagination": {}
              }
            },
            "response": {
              "successMessage": "User device notification deleted successfully!",
              "errorMessage": "Error deleting user device notification."
            }
          }]
        }
      }]
    }
  };
  