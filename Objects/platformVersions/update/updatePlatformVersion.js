global.UpdatePlatformVersion_object = {
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
                      "required": false,
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
                    "queryNature": "update",
                    "queryPayload": `
                      UPDATE platform_versions 
                      SET 
                        version_id = {{version_id}}, 
                        platform_id = {{platform_id}}, 
                        encryption_key = {{encryption_key}}, 
                        status = {{status}}, 
                        updated_at = {{updated_at}} 
                      WHERE 
                        platform_version_id = {{platform_version_id}}
                    `,
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
                "successMessage": "Platform version updated successfully!",
                "errorMessage": "Error updating platform version."
              }
            }
          ]
        }
      }
    ]
  }
};
