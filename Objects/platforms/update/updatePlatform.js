global.UpdatePlatform_object = {
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
                        "name": "platformName",
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
                      "queryNature": "update",
                      "queryPayload": "UPDATE platforms SET platformName = {{platformName}}, entryStatus = {{entryStatus}} WHERE PID = {{PID}}",
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
                  "successMessage": "Platform updated successfully!",
                  "errorMessage": "Error updating platform."
                }
              }
            ]
          }
        }
      ]
    }
  };
  