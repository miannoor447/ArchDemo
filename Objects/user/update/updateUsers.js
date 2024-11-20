global.UpdateUser_object = {
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
                  "name": "name",
                  "validations": ["isValidText"],
                  "required": true,
                  "source": "req.body"
                },
                {
                  "name": "email",
                  "validations": ["isValidEmail"],
                  "required": true,
                  "source": "req.body"
                },
                {
                  "name": "phoneNo",
                  "validations": ["isValidPhoneNumber"],
                  "required": true,
                  "source": "req.body"
                },
                {
                  "name": "updatedAt",
                  "validations": [],
                  "required": true,
                  "source": "server"
                },
                {
                  "name": "Id",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                }
              ]
            },
            "apiInfo": {
              "query": {
                "queryNature": "UPDATE",
                "queryPayload": "UPDATE user SET Name = {{name}}, Email = {{email}}, PhoneNo = {{phoneNo}}, updatedAt = {{updatedAt}} WHERE user_id = {{Id}}",
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
              "pagination": {
                "pageSize": 10,
                "options": {
                  "pageSizeOptions": [
                    5,
                    10,
                    25,
                    50,
                    100,
                    "All"
                  ]
                }
              }
            }
          },
          "response": {
            "successMessage": "User updated successfully!",
            "errorMessage": "There was an error updating the user."
          }
        }]
      }
    }]
  }
};
