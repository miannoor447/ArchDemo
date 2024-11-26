const executeQueryWithPagination = require('../databases/executeQueryWithPagination.js');
const getPaginationParams = require('../Constants/getPaginationParams.js');
const projectDB = require('../databases/projectDb.js');

// Function to build the SQL query based on the request path
const buildQuery = (path, email, userRoleId, permission) => {
    if (path === '/login/request') {
        // Query for login request validation based on email and permission
        return `
            SELECT *
            FROM userroles ur
            JOIN rolespermissions rp ON ur.RoleID = rp.RoleID
            JOIN permissions p ON rp.PermissionID = p.PermissionID
            JOIN users u ON u.user_id = ur.user_id
            WHERE u.Email = '${email}' AND p.PermissionType = '${permission}'
        `;
    } else {
        // Query for permission check based on userRoleId and permission
        return `
            SELECT *
            FROM userroles ur
            JOIN rolespermissions rp ON ur.RoleID = rp.RoleID
            JOIN permissions p ON rp.PermissionID = p.PermissionID
            WHERE ur.UserRoleId = ${userRoleId} AND p.PermissionType = '${permission}'
        `;
    }
};

// Main function to check if the user has the required permission
const permissionChecker = async (req, res, apiData, DecryptedBody, requestedPath) => {
    try {
        const { page, offset, limit } = getPaginationParams(req); // Get pagination params
        const permission = apiData.permission;
        const { email } = DecryptedBody || {}; // Get email from the decrypted body
        const userRoleId = req.query.userRoleId; // Get userRoleId from query params
        
        if (!email && !userRoleId) {
            const errorObject = {
                frameworkStatusCode: 'E22', // Missing required parameters
                httpStatusCode: 400, // Bad Request
                description: "SSC: E22 => Missing required parameters (email or userRoleId)."
            };
        }

        const query = buildQuery(requestedPath, email, userRoleId, permission); // Build the query

        // Execute the query with pagination (if applicable)\
        const connection = projectDB()
        const permissionResults = await executeQueryWithPagination(res, query, "", connection, req.query.page, limit);

        if (permissionResults.length > 0) {
            const successObject = {
                frameworkStatusCode: 'E20', // Permission check successful
                httpStatusCode: 200, // OK
                description: "SSC: E20 => Permission check successful."
            };
        } else {
            const errorObject = {
                frameworkStatusCode: 'E41', // Forbidden access
                httpStatusCode: 403, // Forbidden
                description: "SSC: E41 => Forbidden: You do not have permission to access this resource."
            };
        }
    } catch (error) {
        // General error handling for query execution failure or other issues
        console.error("Permission check error:", error.message);
        const errorObject = {
            frameworkStatusCode: 'E43', // Database query failure
            httpStatusCode: 500, // Internal Server Error
            description: `SSC: E43 => Database query failure: ${error.message}`
        };
    }
};

module.exports = permissionChecker;
