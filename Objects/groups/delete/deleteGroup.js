global.DeleteGroup_object = {
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
                  "name": "group_id",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                }]
              },
              "apiInfo": {
                "query": {
                  "queryNature": "update",
                  "queryPayload": "UPDATE groups SET entryStatus = 'inactive' WHERE group_id = {{Id}}",
                  "database": "projectDB"
                },
                "utilityFunctions": {
                  "callbackFunction": null,
                  "payloadFunction": []
                }
              },
              "requestMetaData": {
                "requestMethod": "PUT", // Changed to PUT since it's an update
                "permission": null,
                "pagination": {}
              }
            },
            "response": {
              "successMessage": "Group inactive successfully!",
              "errorMessage": "Error deleting group."
            }
          }]
        }
      }]
    }
  };
  