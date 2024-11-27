global.AddUser_object = {
    "versions": {
      "versionData": [{
        "=1.0": {
          "steps":[{
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
                  "accessTokenEncryption": false,
                }
              },
              "verification" : {
                  "otp" : false,
                  "accessToken" : true
              }
            },
            "data": {
              "parameters": {
                "fields": 
                  [
                    {
                      "name": "newUser_name",
                      "validations": [],
                      "required": true,
                      "source": "req.body"
                    },
                    {
                      "name": "newUser_email",
                      "validations": ["isValidEmailFormat"],
                      "required": true,
                      "source": "req.body"
                    },
                    {
                      "name": "newUser_phoneno",
                      "validations": ["isValidPhoneNumber"],
                      "required": false,
                      "source": "req.body"
                    },
                    // {
                    //   "name": "newUser_password",
                    //   "validations": [],
                    //   "required": true,
                    //   "source": "req.body"
                    // }
                  ]
              },
              "apiInfo": 
                {
                  "query": {
                    "queryNature": "",
                    "queryPayload": "insert into users (name, email, phoneNo, password, entryStatus) values ({{newUser_name}}, {{newUser_ASDemail}}, {{newUser_phoneno}}, 'xyz123', 'Active')",
                    "database" : "projectDB"
                  },
                  "utilityFunctions": {
                    "callbackFunction": null,
                    "payloadFunction": []
                  }
                }
              ,
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
          }]
        },
      }]
    }
  }
  