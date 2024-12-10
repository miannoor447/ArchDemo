const {
  total_count,
} = require("../../../UtilityFunctions/PayloadFunctions/groups/getCount");

global.ListGroupsAll_object = {
  versions: {
    versionData: [
      {
        "=1.0": {
          steps: [
            {
              config: {
                features: {
                  multistep: false,
                  parameters: false, // No parameters needed to list all groups
                  pagination: true, // Optionally add pagination if needed
                },
                communication: {
                  encryption: {
                    platformEncryption: true,
                    accessTokenEncryption: false,
                  },
                },
                verification: {
                  otp: false,
                  accessToken: false,
                },
              },
              data: {
                parameters: {
                  fields: [], // No specific fields for the list, will return all groups
                },
                apiInfo: {
                  query: {
                    queryNature: "select",
                    queryPayload: `SELECT 
    permission_group_id AS permissionGroups_permissionGroupId, 
    group_name AS permissionGroups_groupName, 
    status AS permissionGroups_status, 
    updated_by AS permissionGroups_updatedBy, 
    created_at AS permissionGroups_createdAt, 
    updated_at AS permissionGroups_updatedAt,
    permission_group_id AS id
FROM 
    permission_groups
WHERE 
    status != 'inactive'`,
                    database: "projectDB",
                  },
                  utilityFunctions: {
                    callbackFunction: null,
                    payloadFunction: [total_count],
                  },
                },
                requestMetaData: {
                  requestMethod: "GET", // GET method is used for listing resources
                  permission: null,
                  pagination: {
                    pageSize: 10, // Default page size, can be customized
                    options: {
                      pageSizeOptions: [5, 10, 25, 50, 100, "All"],
                    },
                  },
                },
              },
              response: {
                successMessage: "Groups retrieved successfully!",
                errorMessage: "Error retrieving groups.",
              },
            },
          ],
        },
      },
    ],
  },
};
