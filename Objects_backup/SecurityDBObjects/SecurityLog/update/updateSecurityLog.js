global.UpdateSecurityLog_object = {
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
                        "name": "id",
                        "validations": [],
                        "required": true,
                        "source": "req.body"
                      },
                      {
                        "name": "error_message",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      },
                      {
                        "name": "status",
                        "validations": [],
                        "required": false,
                        "source": "req.body"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "update",
                      "queryPayload": "UPDATE security_log SET error_message = COALESCE({{error_message}}, error_message), status = COALESCE({{status}}, status), updated_at = CURRENT_TIMESTAMP WHERE id = {{id}} AND status != 'inactive'",
                      "database": "securitydb"
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
                  "successMessage": "Security log updated successfully!",
                  "errorMessage": "Error updating security log."
                }
              }
            ]
          }
        }
      ]
    }
  };
  