global.AddVersion_object = {
    "versions": {
      "versionData": [
        {
          "=1.0": {
            "steps": [
              {
                "config": {
                  "features": {
                    "multistep": true,
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
                        "name": "versionValue",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "insert",
                      "queryPayload": "INSERT INTO versions (versionValue, entryStatus) VALUES ({{versionValue}}, 'Active')",
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
                  "successMessage": "Version added successfully!",
                  "errorMessage": "Error adding version."
                }
              }
            ]
          }
        }
      ]
    }
  };
  