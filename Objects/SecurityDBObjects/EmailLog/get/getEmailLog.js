global.ListEmailLogAll_object = {
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
                      "queryPayload": "UPDATE email_log SET view_count = view_count + 1 WHERE entryStatus = 'Active'; SELECT * FROM email_log",
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
                  "successMessage": "Email logs fetched and view counts updated successfully!",
                  "errorMessage": "Error fetching email logs and updating view counts."
                }
              }
            ]
          }
        }
      ]
    }
  };
  