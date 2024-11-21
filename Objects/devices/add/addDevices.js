global.AddDevices_object = {
  "versions": {
      "versionData": [{
          "=1.0": {
              "steps": [{
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
                          "fields": [{
                              "name": "device_name",
                              "validations": [],
                              "required": true,
                              "source": "req.body"
                          }]
                      },
                      "apiInfo": {
                          "query": {
                              "queryNature": "insert",
                              "queryPayload": "INSERT INTO devices (device_name, entryStatus) VALUES ({{device_name}}, 'Active')",
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
                      "successMessage": "Device added successfully!",
                      "errorMessage": "Error adding device."
                  }
              }]
          }
      }]
  }
};
