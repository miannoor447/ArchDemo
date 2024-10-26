global.GetUserAll_object = {
  "config": {
    "features": {
      "authorization": {
        "accessToken": false,
        "encryption": false,
        "platformToken": false
      },
      "otpVerif": false,
      "multistep": false,
      "parameters": false
    }
  },
  "data": {
    "parameters": {
      "fields": [
        [
        ]
      ]
    },
    "requestType": "GET",
    "permission": "GetUsersAll",
    "apiInfo": [
      {
        "requestMethod": "Retrieving",
        "callbackFunction": null,
        "query": {
          "pagination": true,
          "queryPayload": "SELECT * FROM user",
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
