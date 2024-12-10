global.UpdatePermissionGroup_object = {
    "versions": {
      "versionData": [{
        "=1.0": {
          "steps": [{
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
                "fields": [{
                  "name": "group_id",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                }, 
                {
                    "name": "permission_group_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                },
                {
                    "name": "permission_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                },
                ]
              },
              "apiInfo": {
                "query": {
                  "queryNature": "update",
                  "queryPayload": "UPDATE permissiongroups SET permission_id = {{permission_group_id}, group_id = {{group_id}} WHERE permission_group_id = {{permission_group_id}}",
                  "database": "projectDB"
                },
                "utilityFunctions": {
                  "callbackFunction": null,
                  "payloadFunction": []
                }
              },
              "requestMetaData": {
                "requestMethod": "PUT",  // PATCH is used for updating specific fields
                "permission": null,
                "pagination": {}
              }
            },
            "response": {
              "successMessage": "Permission group updated successfully!",
              "errorMessage": "Error updating permission group."
            }
          }]
        }
      }]
    }
  };
  