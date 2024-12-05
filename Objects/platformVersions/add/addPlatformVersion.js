global.AddPlatformVersion_object = {
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
                        "name": "encryption_key",
                        "validations": [],
                        "required": true,
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
                      "queryNature": "insert",
                      "queryPayload": "INSERT INTO platform_versions (PID, VID, encryption_key, entryStatus) VALUES ({{PID}}, {{VID}}, {{encryption_key}}, 'Active')",
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
                  "successMessage": "Platform version Addd successfully!",
                  "errorMessage": "Error creating platform version."
                }
              }
            ]
          }
        }
      ]
    }
  };
  