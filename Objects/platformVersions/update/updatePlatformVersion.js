global.UpdatePlatformVersion_object = {
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
                        "name": "PVID",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "PID",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "VID",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "EncryptionKey",
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
                      "queryPayload": "UPDATE platformversions SET PID = {{PID}}, VID = {{VID}}, EncryptionKey = {{EncryptionKey}}, entryStatus = {{entryStatus}} WHERE PVID = {{PVID}}",
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
                  "successMessage": "Platform version updated successfully!",
                  "errorMessage": "Error updating platform version."
                }
              }
            ]
          }
        }
      ]
    }
  };
  