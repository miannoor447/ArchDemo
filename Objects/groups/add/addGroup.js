global.AddGroups_object = {
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
                  "name": "group_name",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                }, {
                  "name": "description",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                }]
              },
              "apiInfo": {
                "query": {
                  "queryNature": "insert",
                  "queryPayload": "INSERT INTO groups (group_name, description, entryStatus) VALUES ({{group_name}}, {{description}}, 'Active')",
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
              "successMessage": "Group added successfully!",
              "errorMessage": "Error adding group."
            }
          }]
        }
      }]
    }
  };
  