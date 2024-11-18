global.AddUser_object = {
    "versions": {
      "versionData": [{
        "=1.0": {
          "config": {
            "features": {
              "multistep": true,
              "parameters": true,
              "pagination": false,
            },
            "communication": {
              //"encryption": false,
              "encryption": {
                "platformEncryption": true,
                "otpEncryption": false,
                "staticEncryption" : true
              }
            },
            "verification" : {
                "otp" : false,
                "accessToken" : false
            }
          },
          "data": {
            "parameters": {
              "fields": [
                [
                  {
                    "name": "name",
                    "validations": ["isValidText"],
                    "required": true,
                    "source": "req.body"
                  },
                  {
                    "name": "email",
                    "validations": ["isValidEmailFormat"],
                    "required": true,
                    "source": "req.body"
                  },
                  {
                    "name": "phoneNo",
                    "validations": ["isValidPhoneNumber"],
                    "required": false,
                    "source": "req.body"
                  },
                  {
                    "name": "password",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                  }
                ]
              ]
            },
            "apiInfo": [
              {
                "query": {
                  "queryNature": "",
                  "queryPayload": "insert into users (name, email, phoneNo, password)values ({{name}}, {{email}}, {{phoneNo}}, {{password}})",
                  "database" : "projectDB"
                },
                "utilityFunctions": {
                  "callbackFunction": null,
                  "payloadFunction": []
                }
              }
            ],
            "requestMetaData": {
              "requestMethod": "POST",
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
      }]
    }
  }
  