global.UpdatePermission_object = {
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
                        "name": "permission_id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "permission_name",
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
                      "queryPayload": "UPDATE permissions SET permission_name = {{permission_name}}, entryStatus = {{entryStatus}} WHERE permission_id = {{Id}}",
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
                  "successMessage": "Permission updated successfully!",
                  "errorMessage": "Error updating permission."
                }
              }
            ]
          }
        }
      ]
    }
  };
  