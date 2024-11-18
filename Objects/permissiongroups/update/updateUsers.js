global.UpdateUser_object = {
  "versions": {
    "supported": [
      "=1.0"
    ],
    "versionData": {
      "=1.0": {
        "config": {
          "features": {
            "multistep": false,
            "parameters": true,
            "pagination": false
          },
          "communication": {
            "encryption": {
              "platformEncryption": false,
              "otpEncryption": false,
              "staticEncryption": false
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
              }
            ]
          },
          "apiInfo": [
            {
              "query": {
                "queryNature": "Update",
                "queryPayload": "UPDATE user SET Name = {{name}}, Email = {{email}}, PhoneNo = {{phoneNo}}, updatedAt = {{updatedAt}} WHERE UserId = {{Id}}",
                "database": "projectDB"
              },
              "utilityFunctions": {
                "callbackFunction": null,
                "payloadFunction": []
              }
            }
          ],
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
      }
    }
  }
};
