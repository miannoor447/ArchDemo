global.UpdateUserRolePermissionGroup_object = {
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
                        "name": "userrolepermissiongroup_id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "userrole_id",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      },
                      {
                        "name": "permission_group_id",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "update",
                      "queryPayload": "UPDATE userrolespermissiongroups SET userrole_id = {{userrole_id}}, permission_group_id = {{permission_group_id}}, status = 'Active' WHERE userrolepermissiongroup_id = {{userrolepermissiongroup_id}}",
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
                  "successMessage": "User role permission group updated successfully!",
                  "errorMessage": "Error updating user role permission group."
                }
              }
            ]
          }
        }
      ]
    }
  };
  