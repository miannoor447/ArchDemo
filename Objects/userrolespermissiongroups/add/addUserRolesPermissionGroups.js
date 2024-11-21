global.AddUserRolePermissionGroup_object = {
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
                        "name": "permission_group_id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "insert",
                      "queryPayload": "INSERT INTO userrolespermissiongroups (userrole_id, permission_group_id, entryStatus) VALUES ({{userrole_id}}, {{permission_group_id}}, 'Active')",
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
                  "successMessage": "User role permission group Addd successfully!",
                  "errorMessage": "Error creating user role permission group."
                }
              }
            ]
          }
        }
      ]
    }
  };
  