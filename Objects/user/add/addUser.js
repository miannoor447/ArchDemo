global.AddUser_object = {
    "config": {
      "features": {
        "authorization": {
          "accessToken": false,
          "encryption": false,
          "platformToken": false
        },
        "otpVerif": false,
        "multistep": false,
        "parameters": true
      }
    },
    "data": {
        "parameters": {
            "fields": [
                [
                    {
                        "name": "name",
                        "validations": [
                            "isValidText"
                        ],
                        "required": true,
                        "source": "req.body"
                    },
                    {
                        "name": "email",
                        "validations": [
                            "isValidEmail"
                        ],
                        "required": true,
                        "source": "req.body"
                    },
                    {
                        "name": "phoneNo",
                        "validations": [
                            "isValidPhoneNumber"
                        ],
                        "required": true,
                        "source": "req.body"
                    },
                ]
            ]
        },
        "apiInfo": [
            {
                "requestMethod": "Insertion",
                "callbackFunction": null,
                "query": {
                    "pagination": false,
                    "queryPayload": "INSERT INTO user (Name, Email, PhoneNo, createdAt, updatedAt) VALUES ({{name}}, {{email}} , {{phoneNo}}, {{createdAt}}, {{updatedAt}})",
                }
            }
        ],
        "requestType": "POST",
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
  };
  