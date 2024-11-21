global.UpdateUserRole_object = {
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
                        "name": "userrole_id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "user_id",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      },
                      {
                        "name": "role_id",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "update",
                      "queryPayload": "UPDATE userroles SET user_id = {{user_id}}, role_id = {{role_id}}, entryStatus = 'Active' WHERE userrole_id = {{userrole_id}}",
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
                  "successMessage": "User role updated successfully!",
                  "errorMessage": "Error updating user role."
                }
              }
            ]
          }
        }
      ]
    }
  };
  