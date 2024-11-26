const LogError = require('../../../databases/Errorlog.js');
const { executeQuery } = require('../../../databases/queryExecution.js');
const projectDB = require('../../../databases/projectDb.js');

async function executeStatisticsQueries(req,    res) {
    const resultsObject = {};
        let connection = await projectDB();

        // Query 1: Count for all tables
        let completeQuery = `
            SELECT 
                table_name, 
                table_rows AS record_count
            FROM 
                information_schema.tables
            WHERE 
                table_schema = 'projectdb';
        `;
        resultsObject.tableCounts = await executeQuery(res, completeQuery, "", connection);

        // Query 2: Count of permissions each group has
        completeQuery = `
            SELECT 
                g.id AS group_id,
                g.name AS group_name,
                COUNT(p.id) AS permission_count
            FROM 
                groups g
            LEFT JOIN 
                permissiongroups pg ON g.id = pg.group_id
            LEFT JOIN 
                permissions p ON pg.permission_id = p.id
            GROUP BY 
                g.id, g.name;
        `;
        connection = await projectDB();
        resultsObject.permissionsPerGroup = await xecuteQuery(res, completeQuery, "", connection);

        // Query 3: Count of overlapping permissions between groups
        completeQuery = `
            SELECT 
                g1.id AS group1_id, 
                g2.id AS group2_id, 
                COUNT(DISTINCT p.id) AS overlapping_permissions_count
            FROM 
                permissiongroups pg1
            INNER JOIN 
                permissiongroups pg2 ON pg1.permission_id = pg2.permission_id AND pg1.group_id < pg2.group_id
            INNER JOIN 
                groups g1 ON pg1.group_id = g1.id
            INNER JOIN 
                groups g2 ON pg2.group_id = g2.id
            INNER JOIN 
                permissions p ON pg1.permission_id = p.id
            GROUP BY 
                g1.id, g2.id;
        `;
        connection = await projectDB();
        resultsObject.overlappingPermissions = await xecuteQuery(res, completeQuery, "", connection);

        // Query 4: Count of unassigned permissions
        completeQuery = `
            SELECT 
                COUNT(p.id) AS unassigned_permissions_count
            FROM 
                permissions p
            LEFT JOIN 
                permissiongroups pg ON p.id = pg.permission_id
            WHERE 
                pg.group_id IS NULL;
        `;
        connection = await projectDB();
        resultsObject.unassignedPermissions = await xecuteQuery(res, completeQuery, "", connection);

        // Query 5: Count of active users
        completeQuery = `
            SELECT 
                COUNT(*) AS active_users_count
            FROM 
                users
            WHERE 
                entryStatus = 'Active';
        `;
        connection = await projectDB();
        resultsObject.activeUsers = await xecuteQuery(res, completeQuery, "", connection);

        // Query 6: Count of inactive users
        completeQuery = `
            SELECT 
                COUNT(*) AS inactive_users_count
            FROM 
                users
            WHERE 
                entryStatus = 'Inactive';
        `;
        connection = await projectDB();
        resultsObject.inactiveUsers = await xecuteQuery(res, completeQuery, "", connection);

        // Query 7: Count for all tables in securitydb
        completeQuery = `
            SELECT 
                table_name, 
                table_rows AS record_count
            FROM 
                information_schema.tables
            WHERE 
                table_schema = 'securitydb';
        `;
        connection = await projectDB();
        resultsObject.securityDbTableCounts = await xecuteQuery(res, completeQuery, "", connection);

        // Query 8: Count of users in each permission group
        completeQuery = `
            SELECT 
                pg.id AS permissiongroup_id,
                pg.name AS permissiongroup_name,
                COUNT(DISTINCT ur.user_id) AS user_count
            FROM 
                permissiongroups pg
            LEFT JOIN 
                userrolespermissiongroups urpg ON pg.id = urpg.permissiongroup_id
            LEFT JOIN 
                userroles ur ON urpg.userrole_id = ur.id
            GROUP BY 
                pg.id, pg.name;
        `;
        connection = await projectDB();
        resultsObject.usersPerPermissionGroup = await xecuteQuery(res, completeQuery, "", connection);
        

        return resultsObject;
}

module.exports = { executeStatisticsQueries };
