global.AddPermissionGroup_object = {
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
              "fields": [
                {
                  "name": "group_id",
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
                "queryNature": "insert",
                "queryPayload": "INSERT INTO permissiongroups (permission_id, group_id, status) VALUES ({{permission_id}},{{group_id}}, 'Active')",
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
            "successMessage": "Permission group added successfully!",
            "errorMessage": "Error adding permission group."
          }
        }]
      }
    }]
  }
};
