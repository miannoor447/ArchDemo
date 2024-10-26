global.DeleteUser_object = {
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
            "name": "Id",
            "validations": [
            ],
            "required": true,
            "source": "req.body"
          }
        ]
      ]
    },
    "requestType": "DELETE",
    "permission": "DeleteUser",
    "apiInfo": [
      {
        "requestMethod": "Deletion",
        "callbackFunction": null,
        "query": {
          "pagination": false,
          "queryPayload": "Delete user WHERE UserId = {{Id}};",
        }
      }
    ],
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
