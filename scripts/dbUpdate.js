const fs = require('fs');
const path = require('path');
const projectdb = require('../databases/projectDb'); // Assuming projectDb is imported
const { executeQuery } = require('../databases/queryExecution'); // Assuming executeQuery is imported

// Database connection configuration
const dbConfig = {
  host: 'localhost', // Your DB host
  user: 'root',      // Your DB user
  password: '',      // Your DB password
  database: 'projectdb_new' // Your DB name
};

async function setDefaultsForTables() {
  try {
    let connection = await projectdb();

    // Get all tables from the database
    const tables = await executeQuery(
      null,
      "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ?",
      [dbConfig.database],
      connection
    );

    for (const { TABLE_NAME } of tables) {
      // Get columns information for each table
      connection = await projectdb();
      const columns = await executeQuery(
        null,
        "SELECT COLUMN_NAME, COLUMN_KEY FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?",
        [dbConfig.database, TABLE_NAME],
        connection
      );

      // Check and update 'status' column to have default 'active'
      const statusColumn = columns.find(col => col.COLUMN_NAME === 'status');
      if (statusColumn) {
        connection = await projectdb();
        await executeQuery(
          null,
          `ALTER TABLE ${TABLE_NAME} ALTER COLUMN status SET DEFAULT 'active'`,
          [],
          connection
        );
        console.log(`Set default value 'active' for status column in ${TABLE_NAME}`);
      }

      // Check and update 'created_at' and 'updated_at' columns for automatic timestamp
      const createdAtColumn = columns.find(col => col.COLUMN_NAME === 'created_at');
      const updatedAtColumn = columns.find(col => col.COLUMN_NAME === 'updated_at');
      
      if (createdAtColumn) {
        connection = await projectdb();
        await executeQuery(
          null,
          `ALTER TABLE ${TABLE_NAME} MODIFY COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`,
          [],
          connection
        );
        console.log(`Set automatic timestamp for created_at in ${TABLE_NAME}`);
      }
      
      if (updatedAtColumn) {
        connection = await projectdb();
        await executeQuery(
          null,
          `ALTER TABLE ${TABLE_NAME} MODIFY COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`,
          [],
          connection
        );
        console.log(`Set automatic timestamp for updated_at in ${TABLE_NAME}`);
      }
    }

    console.log('All tables updated successfully!');
  } catch (error) {
    console.error('Error updating tables:', error);
  }
}

// Call the function to execute the updates
setDefaultsForTables();
