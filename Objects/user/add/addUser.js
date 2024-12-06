global.AddUser_object = {
  "versions": {
    "versionData": [{
      "=1.0": {
        "steps": [{
          "config": {
            "features": {
              "multistep": true,
              "parameters": true,
              "pagination": false,
            },
            "communication": {
              "encryption": {
                "platformEncryption": true,
                "accessTokenEncryption": false,
              }
            },
            "verification": {
              "otp": false,
              "accessToken": true
            }
          },
          "data": {
            "parameters": {
              "fields": [
                {
                  "name": "user_id",
                  "validations": [],
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
                  "name": "first_name",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                },
                {
                  "name": "last_name",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                },
                {
                  "name": "phone_no",
                  "validations": ["isValidPhoneNumber"],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "cnic",
                  "validations": [],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "gender",
                  "validations": [],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "father_name",
                  "validations": [],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "image_attachment_id",
                  "validations": [],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "address",
                  "validations": [],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "date_of_birth",
                  "validations": [],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "blood_group",
                  "validations": [],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "religion",
                  "validations": [],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "status",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                }
              ]
            },
            "apiInfo": {
              "query": {
                "queryNature": "insert",
                "queryPayload": "INSERT INTO users (user_id, email, first_name, last_name, phone_no, cnic, gender, father_name, image_attachment_id, address, date_of_birth, blood_group, religion, status) VALUES ({{user_id}}, {{email}}, {{first_name}}, {{last_name}}, {{phone_no}}, {{cnic}}, {{gender}}, {{father_name}}, {{image_attachment_id}}, {{address}}, {{date_of_birth}}, {{blood_group}}, {{religion}}, 'Active')",
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
            "successMessage": "User added successfully!",
            "errorMessage": "There was an error adding the user."
          }
        }]
      },
    }]
  }
};
