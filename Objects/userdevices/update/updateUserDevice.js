global.UpdateUserDevice_object = {
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
                        "name": "userdevice_id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "device_otp",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      },
                      {
                        "name": "device_token",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      },
                      {
                        "name": "entryStatus",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "update",
                      "queryPayload": "UPDATE userdevices SET device_otp = {{device_otp}}, device_token = {{device_token}}, entryStatus = {{entryStatus}} WHERE userdevice_id = {{Id}}",
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
                  "successMessage": "User device updated successfully!",
                  "errorMessage": "Error updating user device."
                }
              }
            ]
          }
        }
      ]
    }
  };
  