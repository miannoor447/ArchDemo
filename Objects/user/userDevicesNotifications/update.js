global.UpdateUserDeviceNotification_object = {
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
                  },
                  {
                    "name": "user_device_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                  },
                  {
                    "name": "notification_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                  },
                  {
                    "name": "status",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                  }
                ]
              },
              "apiInfo": {
                "query": {
                  "queryNature": "UPDATE",
                  "queryPayload": "UPDATE user_device_notifications SET user_device_id = {{user_device_id}}, notification_id = {{notification_id}}, status = {{status}}, updated_at = {{updated_at}} WHERE user_device_notification_id = {{user_device_notification_id}}",
                  "database": "projectDB"
                },
                "utilityFunctions": {
                  "callbackFunction": null,
                  "payloadFunction": []
                }
              },
              "requestMetaData": {
                "requestMethod": "PUT",
                "permission": null,
                "pagination": {}
              }
            },
            "response": {
              "successMessage": "User device notification updated successfully!",
              "errorMessage": "Error updating user device notification."
            }
          }]
        }
      }]
    }
  };
  