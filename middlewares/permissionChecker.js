const executeQueryWithPagination = require('../Constants/executeQueryWithPagination.js');
const getPaginationParams = require('../Constants/getPaginationParams.js');



const buildQuery = (path, email, userRoleId, permission) => {
    if (path === '/login/request') {
        return `
            SELECT *
            FROM userroles ur
            JOIN rolespermissions rp ON ur.RoleID = rp.RoleID
            JOIN permissions p ON rp.PermissionID = p.PermissionID
            JOIN users u ON u.UserId = ur.UserId
            WHERE u.Email = '${email}' AND p.PermissionType = '${permission}'
        `;
    } else {
        return `
            SELECT *
            FROM userroles ur
            JOIN rolespermissions rp ON ur.RoleID = rp.RoleID
            JOIN permissions p ON rp.PermissionID = p.PermissionID
            WHERE ur.UserRoleId = ${userRoleId} AND p.PermissionType = '${permission}'
        `;
    }
};

const permissionChecker = async (req, res, apiData, requestedPath) => {
    const { page, offset, limit } = getPaginationParams(req);
    
    const permission = apiData.permission
    const {email} = req.body || {};
    const query = buildQuery(requestedPath, email, req.query.userRoleId, permission);

    try {
        const permissionResults = await executeQueryWithPagination(res, query, "", page, limit);
        if (permissionResults.length > 0) {
            return;
        } else {
            throw new Error('Forbidden: You do not have permission to access this resource');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = permissionChecker;