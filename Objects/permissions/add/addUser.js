global.AddUser_object = {
    "versions": {
      "supported": [
        "=1.0"
      ],
      "versionData": {
        "=1.0": {
          "config": {
            "features": {
              "multistep": true,
              "parameters": true,
              "pagination": false,
            },
            "communication": {
              "encryption": {
                "platformEncryption": true,
                "otpEncryption": false,
                "staticEncryption" : true
              }
            },
            "verification" : {
                "otp" : true,
                "accessToken" : false
            }
          },
          "data": {
            "parameters": {
              "fields": [
                [
                  {
                    "name": "",
                    "validations": [],
                    "required": true,
                    "source": ""
                  }
                ]
              ]
            },
            "apiInfo": [
              {
                "query": {
                  "queryNature": "",
                  "queryPayload": null,
                  "database" : "projectDB"
                },
                "utilityFunctions": {
                  "callbackFunction": null,
                  "payloadFunction": []
                }
              }
            ],
            "requestMetaData": {
              "requestMethod": "",
              "permission": null,
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
            "successMessage": "Configuration generated successfully!",
            "errorMessage": "There was an error generating the configuration."
          }
        },
      }
    }
  }
  