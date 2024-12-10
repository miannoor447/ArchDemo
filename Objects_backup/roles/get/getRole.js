const {
  total_count,
} = require("../../../UtilityFunctions/PayloadFunctions/roles/getCount");
global.ListRolesAll_object = {
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
                  pagination: true,
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
                  fields: [],
                },
                apiInfo: {
                  query: {
                    queryNature: "select",
                    queryPayload: `SELECT 
    r1.role_id AS roles_roleId,
    r1.role_id AS id,
    r1.role_name AS roles_roleName,
    r2.role_name AS roles_seniorRoleName,
    r1.status AS roles_status,
    r1.updated_by AS roles_updatedBy,
    r1.created_at AS roles_createdAt,
    r1.updated_at AS roles_updatedAt
FROM roles r1
LEFT JOIN roles r2 ON r1.senior_role_id = r2.role_id
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
                    limit: 10,
                    offset: 0,
                  },
                },
              },
              response: {
                successMessage: "Roles listed successfully!",
                errorMessage: "Error listing roles.",
              },
            },
          ],
        },
      },
    ],
  },
};
