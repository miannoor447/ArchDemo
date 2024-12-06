global.UpdateUser_object = {
  "versions": {
    "versionData": [{
      "=1.0": {
        "steps": [{
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
                  "name": "user_id",
                  "validations": [],
                  "required": true,
                  "source": "req.body"
                },
                {
                  "name": "email",
                  "validations": ["isValidEmail"],
                  "required": true,
                  "source": "req.body"
                },
                {
                  "name": "first_name",
                  "validations": ["isValidText"],
                  "required": false,
                  "source": "req.body"
                },
                {
                  "name": "last_name",
                  "validations": ["isValidText"],
                  "required": false,
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
                  "required": false,
                  "source": "req.body"
                }
              ]
            },
            "apiInfo": {
              "query": {
                "queryNature": "UPDATE",
                "queryPayload": "UPDATE users SET email = {{email}}, first_name = {{first_name}}, last_name = {{last_name}}, phone_no = {{phone_no}}, cnic = {{cnic}}, gender = {{gender}}, father_name = {{father_name}}, image_attachment_id = {{image_attachment_id}}, address = {{address}}, date_of_birth = {{date_of_birth}}, blood_group = {{blood_group}}, religion = {{religion}}, status = {{status}}, updated_at = {{updated_at}} WHERE user_id = {{user_id}}",
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
            "successMessage": "User updated successfully!",
            "errorMessage": "There was an error updating the user."
          }
        }]
      }
    }]
  }
};
