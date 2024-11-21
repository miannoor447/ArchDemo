global.UpdateEmailLog_object = {
    "versions": {
      "versionData": [
        {
          "=1.0": {
            "steps": [
              {
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
                    "fields": [
                      {
                        "name": "email_id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "view_count",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "update",
                      "queryPayload": "UPDATE email_log SET view_count = COALESCE({{view_count}}, view_count), updated_at = CURRENT_TIMESTAMP WHERE email_id = {{email_id}}",
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
                    "pagination": {}
                  }
                },
                "response": {
                  "successMessage": "Email log updated successfully!",
                  "errorMessage": "Error updating email log."
                }
              }
            ]
          }
        }
      ]
    }
  };
  