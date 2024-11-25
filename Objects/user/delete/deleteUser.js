global.DeleteUser_object = {
  "versions": {
    "versionData": [{
      "=1.0": {
        "config": {
          "features": {
            "multistep": false,
            "parameters": true,
            "pagination": false
          },
          "communication": {
            "encryption": {
              "platformEncryption": true,
              "otpEncryption": false,
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
              [
                {
                  "name": "Id",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                }
              ]
            ]
          },
          "apiInfo": [
            {
              "query": {
                "queryNature": "Deletion",
                "queryPayload": "Update users set entryStatus = 'deleted' WHERE user_id = {{Id}};",
                "database": "projectDB"
              },
              "utilityFunctions": {
                "callbackFunction": null,
                "payloadFunction": []
              }
            }
          ],
          "requestMetaData": {
            "requestMethod": "DELETE",
            "permission": "DeleteUser",
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
          "successMessage": "User deleted successfully!",
          "errorMessage": "There was an error deleting the user."
        }
      }
    }]
  }
};
