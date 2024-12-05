const projectDB = require("../databases/projectDb");
const {executeQuery} = require("../databases/queryExecution")
const fetchTablesQuery = `
    SELECT 
        table_name 
    FROM 
        information_schema.tables 
    WHERE 
        table_schema = 'projectdb_new';
`;


const roles = ['HR', 'Admin', 'User'];
const operations = ['list', 'add', 'update', 'delete'];

async function insertPermissions() {
    try {
        // Fetch all table names from the schema
        let connection = projectDB(); // Establish a connection to the database
        const tablesResult = await executeQuery(null, fetchTablesQuery, [], connection);
        const tables = tablesResult.map(row => row.table_name); // Extract table names

        let insertQueries = []; // To batch insert queries

        tables.forEach(table => {
            roles.forEach(role => {
                operations.forEach(operation => {
                    // Construct permission name
                    const permissionName = `${role}_${operation}_${table}`;
                    // Construct insert query
                    const insertQuery = `
                        INSERT INTO permissions (permission_name, status)
                        VALUES ('${permissionName}', 'active')
                        ON DUPLICATE KEY UPDATE permission_name = permission_name;
                    `;
                    insertQueries.push(insertQuery);
                });
            });
        });

        // Execute all insert queries in a batch
        for (let query of insertQueries) {
            connection = projectDB(); // Establish a connection to the database
            await executeQuery(null, query, [], connection);
        }

        console.log("Permissions inserted successfully.");
    } catch (error) {
        console.error("Error inserting permissions:", error);
    } finally {
    }
}

// Run the function
insertPermissions();
