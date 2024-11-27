const LogError = require('../../../databases/Errorlog.js');
const { executeQuery } = require('../../../databases/queryExecution.js');
const projectDB = require('../../../databases/projectDb.js');


async function getTableCounts(req, res) {
    try {
        const fetchTablesQuery = `
            SELECT 
                table_name 
            FROM 
                information_schema.tables 
            WHERE 
                table_schema = 'projectdb';
        `;
        let connection = projectDB()
        const tablesResult = await executeQuery(null, fetchTablesQuery, [], connection);

        if (!tablesResult || tablesResult.length === 0) {
            return {};
        }

        const tableCounts = {};

        for (const table of tablesResult) {
            const tableName = table.table_name;
            const countQuery = `SELECT COUNT(*) AS record_count FROM \`${tableName}\`;`;
            connection = projectDB()
            const countResult = await executeQuery(null, countQuery, [], connection);
            tableCounts[tableName] = countResult[0]?.record_count || 0;
        }

        return tableCounts;
    } catch (error) {
        throw error;
    }
}

// Query 2: Count of permissions each group has
async function getPermissionsPerGroup(req, res) {
    const query = `
        SELECT 
            g.group_id AS group_id,
            g.group_name AS group_name,
            COUNT(p.permission_id) AS permission_count
        FROM 
            groups g
        LEFT JOIN 
            permissiongroups pg ON g.group_id = pg.group_id
        LEFT JOIN 
            permissions p ON pg.permission_id = p.permission_id
        GROUP BY 
            g.group_id, g.group_name;
    `;    
    const connection = projectDB();

    return await executeQuery(res, query, "", connection);
}

// Query 3: Count of overlapping permissions between groups
async function getOverlappingPermissions(req, res) {
    const query = `
        SELECT 
            g1.group_id AS group1_id, 
            g2.group_id AS group2_id, 
            COUNT(DISTINCT p.permission_id) AS overlapping_permissions_count
        FROM 
            permissiongroups pg1
        INNER JOIN 
            permissiongroups pg2 ON pg1.permission_id = pg2.permission_id AND pg1.group_id < pg2.group_id
        INNER JOIN 
            groups g1 ON pg1.group_id = g1.group_id
        INNER JOIN 
            groups g2 ON pg2.group_id = g2.group_id
        INNER JOIN 
            permissions p ON pg1.permission_id = p.permission_id
        GROUP BY 
            g1.group_id, g2.group_id;
    `;    
    const connection = projectDB();

    return await executeQuery(res, query, "", connection);
}

// Query 4: Count of unassigned permissions
async function getUnassignedPermissions(req, res) {
    const query = `
        SELECT 
            COUNT(p.permission_id) AS unassigned_permissions_count
        FROM 
            permissions p
        LEFT JOIN 
            permissiongroups pg ON p.permission_id = pg.permission_id
        WHERE 
            pg.group_id IS NULL;
    `;    
    const connection = projectDB();

    return await executeQuery(res, query, "", connection);
}

// Query 5: Count of active users
async function getActiveUsers(req, res) {
    const query = `
        SELECT 
            COUNT(*) AS active_users_count
        FROM 
            users
        WHERE 
            entryStatus = 'active';
    `;    
    const connection = projectDB();

    return await executeQuery(res, query, "", connection);
}

// Query 6: Count of inactive users
async function getInactiveUsers(req, res) {
    const query = `
        SELECT 
            COUNT(*) AS inactive_users_count
        FROM 
            users
        WHERE 
            entryStatus = 'inactive';
    `;    
    const connection = projectDB();

    return await executeQuery(res, query, "", connection);
}

// Query 7: Count for all tables in securitydb
async function getSecurityDbTableCounts(req, res) {
    const query = `
        SELECT 
            table_name, 
            table_rows AS record_count
        FROM 
            information_schema.tables
        WHERE 
            table_schema = 'securitydb';
    `;    
    const connection = projectDB();

    return await executeQuery(res, query, "", connection);
}

// Query 8: Count of users in each permission group
async function getUsersPerPermissionGroup(req, res) {
    const query = `
        SELECT 
            pg.permission_group_id AS permissiongroup_id,
            pg.permission_id AS permissiongroup_name,
            COUNT(DISTINCT ur.user_id) AS user_count
        FROM 
            permissiongroups pg
        LEFT JOIN 
            userrolespermissiongroups urpg ON pg.permission_group_id = urpg.permission_group_id
        LEFT JOIN 
            userroles ur ON urpg.userrole_id = ur.role_id
        GROUP BY 
            pg.permission_group_id, pg.permission_id;
    `;    
    const connection = projectDB();
    return await executeQuery(res, query, "", connection);
}


async function executeStatisticsQueries(req, res) {
    const resultsObject = {};
    resultsObject.tableCounts = await getTableCounts(req, res);
    resultsObject.permissionsPerGroup = await getPermissionsPerGroup(req, res);
    resultsObject.overlappingPermissions = await getOverlappingPermissions(req, res);
    resultsObject.unassignedPermissions = await getUnassignedPermissions(req, res);
    resultsObject.activeUsers = await getActiveUsers(req, res);
    resultsObject.inactiveUsers = await getInactiveUsers(req, res);
    resultsObject.securityDbTableCounts = await getSecurityDbTableCounts(req, res);
    resultsObject.usersPerPermissionGroup = await getUsersPerPermissionGroup(req, res);
    return resultsObject;
}

module.exports = {
    getTableCounts,
    getPermissionsPerGroup,
    getOverlappingPermissions,
    getUnassignedPermissions,
    getActiveUsers,
    getInactiveUsers,
    getSecurityDbTableCounts,
    getUsersPerPermissionGroup,
    executeStatisticsQueries 
};
