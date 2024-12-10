
const { total_count } = require("../../../UtilityFunctions/PayloadFunctions/permissionGroups/getCount");

global.ListPermissionGroupsAll_object = {
  "versions": {
    "versionData": [{
      "=1.0": {
        "steps": [{
          "config": {
            "features": {
              "multistep": false,
              "parameters": false,
              "pagination": true  // Pagination added if needed
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
              "fields": []  // No specific fields needed for listing all permission groups
            },
            "apiInfo": {
              "query": {
                "queryNature": "select",
                "queryPayload": "SELECT permission_group_id AS id, permissiongroups.* FROM permissiongroups ",  // Exclude logically inactive groups
                "database": "projectDB"
              },
              "utilityFunctions": {
                "callbackFunction": null,
                "payloadFunction": [total_count]
              }
            },
            "requestMetaData": {
              "requestMethod": "GET",
              "permission": null,
              "pagination": {
                "pageSize": 10, 
              }
            }
          },
          "response": {
            "successMessage": "Permission groups retrieved successfully!",
            "errorMessage": "Error retrieving permission groups."
          }
        }]
      }
    }]
  }
};
