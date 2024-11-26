global.DeleteRole_object = {
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
                        "name": "role_id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "delete",
                        "queryPayload": "UPDATE roles SET entryStatus = 'inactive' WHERE role_id = {{Id}}",
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
                  "successMessage": "Role inactive successfully!",
                  "errorMessage": "Error deleting role."
                }
              }
            ]
          }
        }
      ]
    }
  };
  