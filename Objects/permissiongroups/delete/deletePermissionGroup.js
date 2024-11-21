global.DeletePermissionGroup_object = {
    "versions": {
      "versionData": [{
        "=1.0": {
          "steps": [{
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
                "fields": [{
                  "name": "permission_group_id",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                }]
              },
              "apiInfo": {
                "query": {
                  "queryNature": "update",
                  "queryPayload": "UPDATE permissiongroups SET entryStatus = 'deleted' WHERE permission_group_id = {{permission_group_id}}",
                  "database": "projectDB"
                },
                "utilityFunctions": {
                  "callbackFunction": null,
                  "payloadFunction": []
                }
              },
              "requestMetaData": {
                "requestMethod": "PATCH",  // PATCH is used for partial updates (logical delete)
                "permission": null,
                "pagination": {}
              }
            },
            "response": {
              "successMessage": "Permission group marked as deleted successfully!",
              "errorMessage": "Error deleting permission group."
            }
          }]
        }
      }]
    }
  };
  