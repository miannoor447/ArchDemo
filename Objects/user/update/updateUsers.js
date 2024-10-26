global.UpdateUser_object = {
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
          "requestMethod": "Update",
          "callbackFunction": null,
          "query": {
            "pagination": false,
            "queryPayload": "UPDATE user SET Name = {{name}}, Email = {{email}}, PhoneNo = {{phoneNo}}, updatedAt = {{updatedAt}} WHERE UserId = {{Id}};",
          }
        }
      ],
      "requestType": "PUT",
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
