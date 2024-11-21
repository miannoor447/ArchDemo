global.ListUserRolePermissionGroupAll_object = {
    "versions": {
      "versionData": [
        {
          "=1.0": {
            "steps": [
              {
                "config": {
                  "features": {
                    "multistep": false,
                    "parameters": true,
                    "pagination": true
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
                    "fields": []
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "select",
                      "queryPayload": "SELECT * FROM userrolespermissiongroups WHERE entryStatus = 'Active'",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "GET",
                    "permission": null,
                    "pagination": {
                      "limit": 10,
                      "offset": 0
                    }
                  }
                },
                "response": {
                  "successMessage": "User role permission groups fetched successfully!",
                  "errorMessage": "Error fetching user role permission groups."
                }
              }
            ]
          }
        }
      ]
    }
  };
  