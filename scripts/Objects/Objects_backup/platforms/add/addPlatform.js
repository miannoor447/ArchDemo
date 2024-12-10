global.AddPlatform_object = {
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
                      "name": "platform_name",
                      "validations": [],
                      "required": true,
                      "source": "req.body"
                    },
                  ]
                },
                "apiInfo": {
                  "query": {
                    "queryNature": "insert",
                    "queryPayload": "INSERT INTO platforms (platform_name, status) VALUES ({{platform_name}}, 'Active')",
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
                "successMessage": "Platform added successfully!",
                "errorMessage": "Error creating platform."
              }
            }
          ]
        }
      }
    ]
  }
};
