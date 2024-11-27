const { executeStatisticsQueries } = require("../../UtilityFunctions/CallbackFunctions/AdminDashboard/getAllAdminDashboardInfo");

global.AdminDashboard_object = {
    "versions": {
      "versionData": [{
        "=1.0": {
          "steps":[
            {
            "config": {
              "features": {
                "multistep": false,
                "parameters": false,
                "pagination": false,
              },
              "communication": {
                "encryption": false,
              },
              "verification" : {
                  "otp" : false,
                  "accessToken" : false
              }
            },
            "data": {
              "parameters": {
                "fields": 
                  [
                  ]
              },
              "apiInfo": 
                {
                  "query": {
                    "queryNature": "",
                    "queryPayload": "",
                    "database" : "projectDB"
                  },
                  "utilityFunctions": {
                    "callbackFunction": null,
                    "payloadFunction": [executeStatisticsQueries]
                  }
                }
              ,
              "requestMetaData": {
                "requestMethod": "POST",
                "permission": null,
                "pagination": {
                  "pageSize": 10
                }
              }
            },
            "response": {
              "successMessage": "Configuration generated successfully!",
              "errorMessage": "There was an error generating the configuration."
            }
            },
            ]
        },
      }]
    }
  }
  