global.AddPlatformVersion_object = {
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
                      "name": "platform_version_id",
                      "validations": [],
                      "required": true,
                      "source": "req.body"
                    },
                    {
                      "name": "version_id",
                      "validations": [],
                      "required": true,
                      "source": "req.body"
                    },
                    {
                      "name": "platform_id",
                      "validations": [],
                      "required": true,
                      "source": "req.body"
                    },
                    {
                      "name": "encryption_key",
                      "validations": [],
                      "required": true,
                      "source": "req.body"
                    },
                    {
                      "name": "status",
                      "validations": [],
                      "required": false,
                      "source": "req.body"
                    },
                  ]
                },
                "apiInfo": {
                  "query": {
                    "queryNature": "insert",
                    "queryPayload": `
                      INSERT INTO platform_versions 
                      (platform_version_id, version_id, platform_id, encryption_key, status, created_at, updated_at) 
                      VALUES 
                      ({{platform_version_id}}, {{version_id}}, {{platform_id}}, {{encryption_key}}, 
                      'active', {{created_at}}, {{updated_at}})
                    `,
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
                "successMessage": "Platform version added successfully!",
                "errorMessage": "Error creating platform version."
              }
            }
          ]
        }
      }
    ]
  }
};
