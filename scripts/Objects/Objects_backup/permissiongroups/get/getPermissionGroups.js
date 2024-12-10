const {
  total_count,
} = require("../../../UtilityFunctions/PayloadFunctions/permissionGroups/getCount");

global.ListPermissionGroupsAll_object = {
  versions: {
    versionData: [
      {
        "=1.0": {
          steps: [
            {
              config: {
                features: {
                  multistep: false,
                  parameters: false,
                  pagination: true, // Pagination added if needed
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
                  fields: [], // No specific fields needed for listing all permission groups
                },
                apiInfo: {
                  query: {
                    queryNature: "select",
                    queryPayload: `SELECT 
    PGP.permission_group_permission_id AS PGP_permissionGroupPermissionId,
    PGP.permission_group_permission_id AS id,
    PGP.group_id AS PGP_groupId,
    PGP.permission_id AS PGP_permissionId,
    PGP.status AS PGP_status,
    PGP.updated_by AS PGP_updatedBy,
    PGP.created_at AS PGP_createdAt,
    PGP.updated_at AS PGP_updatedAt
FROM 
    permission_groups_permissions AS PGP
WHERE 
    PGP.status = 'active'
`,
                    database: "projectDB",
                  },
                  utilityFunctions: {
                    callbackFunction: null,
                    payloadFunction: [total_count],
                  },
                },
                requestMetaData: {
                  requestMethod: "GET",
                  permission: null,
                  pagination: {
                    pageSize: 10,
                  },
                },
              },
              response: {
                successMessage: "Permission groups retrieved successfully!",
                errorMessage: "Error retrieving permission groups.",
              },
            },
          ],
        },
      },
    ],
  },
};
