global.DeletePlatform_object = {
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
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "delete",
                        "queryPayload": "UPDATE platforms SET entryStatus = 'inactive' WHERE PID = {{PID}}",
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
                  "successMessage": "Platform inactive successfully!",
                  "errorMessage": "Error deleting platform."
                }
              }
            ]
          }
        }
      ]
    }
  };
  