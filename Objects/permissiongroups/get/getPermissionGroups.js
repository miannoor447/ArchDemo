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
                "queryPayload": "SELECT permission_group_is AS id, permissiongroups.* FROM permissiongroups WHERE entryStatus != 'inactive'",  // Exclude logically inactive groups
                "database": "projectDB"
              },
              "utilityFunctions": {
                "callbackFunction": null,
                "payloadFunction": []
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
