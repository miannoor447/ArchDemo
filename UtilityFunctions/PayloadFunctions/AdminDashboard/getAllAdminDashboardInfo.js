const LogError = require('../../../databases/Errorlog.js');
const { executeQuery } = require('../../../databases/queryExecution.js');
const projectDB = require('../../../databases/projectDb.js');

/**
 * Function to get record counts for all tables in 'projectdb_new' schema.
 */
async function getTableCounts(req, res) {
    try {
        const fetchTablesQuery = `
            SELECT 
                table_name 
            FROM 
                information_schema.tables 
            WHERE 
                table_schema = 'projectdb_new';
        `;
        let connection = projectDB();
        const tablesResult = await executeQuery(null, fetchTablesQuery, [], connection);

        if (!tablesResult || tablesResult.length === 0) {
            return {};
        }

        const tableCounts = {};

        for (const table of tablesResult) {
            const tableName = table.table_name;
            const countQuery = `SELECT COUNT(*) AS record_count FROM \`${tableName}\`;`;
            connection = projectDB();
            const countResult = await executeQuery(null, countQuery, [], connection);
            tableCounts[tableName] = countResult[0]?.record_count || 0;
        }

        return tableCounts;
    } catch (error) {
        LogError(error);
        throw error;
    }
}

/**
 * Query 2: Count of permissions each permission group has.
 */
async function getPermissionsPerGroup(req, res) {
    const query = `
        SELECT 
            pg.permission_group_id AS group_id,
            pg.group_name AS group_name,
            COUNT(p.permission_id) AS permission_count
        FROM 
            permission_groups pg
        LEFT JOIN 
            permission_groups_permissions ppg ON pg.permission_group_id = ppg.group_id
        LEFT JOIN 
            permissions p ON ppg.permission_id = p.permission_id
        GROUP BY 
            pg.permission_group_id, pg.group_name;
    `;
    const connection = projectDB();

    try {
        const result = await executeQuery(null, query, [], connection);
        return result;
    } catch (error) {
        LogError(error);
        throw error;
    }
}

/**
 * Query 3: Count of overlapping permissions between permission groups.
 */
async function getOverlappingPermissions(req, res) {
    const query = `
        SELECT 
            g1.permission_group_id AS group1_id, 
            g2.permission_group_id AS group2_id, 
            COUNT(DISTINCT p.permission_id) AS overlapping_permissions_count
        FROM 
            permission_groups_permissions ppg1
        INNER JOIN 
            permission_groups_permissions ppg2 
            ON ppg1.permission_id = ppg2.permission_id 
            AND ppg1.group_id < ppg2.group_id
        INNER JOIN 
            permission_groups g1 ON ppg1.group_id = g1.permission_group_id
        INNER JOIN 
            permission_groups g2 ON ppg2.group_id = g2.permission_group_id
        INNER JOIN 
            permissions p ON ppg1.permission_id = p.permission_id
        GROUP BY 
            g1.permission_group_id, g2.permission_group_id;
    `;
    const connection = projectDB();

    try {
        const result = await executeQuery(null, query, [], connection);
        return result;
    } catch (error) {
        LogError(error);
        throw error;
    }
}

/**
 * Query 4: Count of unassigned permissions (permissions not linked to any permission group).
 */
async function getUnassignedPermissions(req, res) {
    const query = `
        SELECT 
            COUNT(p.permission_id) AS unassigned_permissions_count
        FROM 
            permissions p
        LEFT JOIN 
            permission_groups_permissions ppg ON p.permission_id = ppg.permission_id
        WHERE 
            ppg.group_id IS NULL;
    `;
    const connection = projectDB();

    try {
        const result = await executeQuery(null, query, [], connection);
        return result;
    } catch (error) {
        LogError(error);
        throw error;
    }
}

/**
 * Query 5: Count of active users.
 */
async function getActiveUsers(req, res) {
    const query = `
        SELECT 
            COUNT(*) AS active_users_count
        FROM 
            users
        WHERE 
            status = 'active';
    `;
    const connection = projectDB();

    try {
        const result = await executeQuery(null, query, [], connection);
        return result;
    } catch (error) {
        LogError(error);
        throw error;
    }
}

/**
 * Query 6: Count of inactive users.
 */
async function getInactiveUsers(req, res) {
    const query = `
        SELECT 
            COUNT(*) AS inactive_users_count
        FROM 
            users
        WHERE 
            status = 'inactive';
    `;
    const connection = projectDB();

    try {
        const result = await executeQuery(null, query, [], connection);
        return result;
    } catch (error) {
        LogError(error);
        throw error;
    }
}

/**
 * Query 7: Count of records for all tables in 'securitydb' schema.
 * If 'securitydb' is not part of your current schema, adjust accordingly.
 */
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

    try {
        const result = await executeQuery(null, query, [], connection);
        return result;
    } catch (error) {
        LogError(error);
        throw error;
    }
}

/**
 * Query 8: Count of users in each permission group.
 */
async function getUsersPerPermissionGroup(req, res) {
    const query = `
        SELECT 
            pg.permission_group_id AS permissiongroup_id,
            pg.group_name AS permissiongroup_name,
            COUNT(DISTINCT urdd.user_id) AS user_count
        FROM 
            permission_groups pg
        LEFT JOIN 
            permission_groups_permissions ppg ON pg.permission_group_id = ppg.group_id
        LEFT JOIN 
            user_role_designation_permissions urdp ON ppg.permission_id = urdp.permission_id
        LEFT JOIN 
            user_roles_designations_department urdd ON urdp.user_role_designation_department_id = urdd.user_role_designation_department_id
        GROUP BY 
            pg.permission_group_id, pg.group_name;
    `;
    const connection = projectDB();

    try {
        const result = await executeQuery(null, query, [], connection);
        return result;
    } catch (error) {
        LogError(error);
        throw error;
    }
}

/**
 * Function to execute all statistical queries and compile results.
 */
async function executeStatisticsQueries(req, res) {
    try {
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
    } catch (error) {
        LogError(error);
        throw error;
    }
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
