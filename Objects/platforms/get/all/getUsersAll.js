global.GetUserAll_object = {
  "versions": {
    "supported": [
      "=1.0"
    ],
    "versionData": {
      "=1.0": {
        "config": {
          "features": {
            "multistep": false,
            "parameters": false,
            "pagination": true
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
            "fields": []
          },
          "apiInfo": [
            {
              "query": {
                "queryNature": "Retrieving",
                "queryPayload": "SELECT * FROM user",
                "database": "projectDB"
              },
              "utilityFunctions": {
                "callbackFunction": null,
                "payloadFunction": []
              }
            }
          ],
          "requestMetaData": {
            "requestMethod": "GET",
            "permission": "GetUsersAll",
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
          "successMessage": "Users retrieved successfully!",
          "errorMessage": "There was an error retrieving the users."
        }
      }
    }
  }
};
