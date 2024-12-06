global.AddUserDevice_object = {
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
                        "name": "user_id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "device_id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "device_otp",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "device_token",
                        "validations": [],
                        "required": true,
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
                      "queryNature": "insert",
                      "queryPayload": "INSERT INTO userdevices (user_id, device_id, device_otp, device_token, status) VALUES ({{user_id}}, {{device_id}}, {{device_otp}}, {{device_token}}, 'Active')",
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
                  "successMessage": "User device Addd successfully!",
                  "errorMessage": "Error creating user device."
                }
              }
            ]
          }
        }
      ]
    }
  };
  