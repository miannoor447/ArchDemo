const express = require('express');
const apiRoutes = require('./dynamicRoutes.js');
const applyMiddleware = require('./ProtectionProtocols/middleware.js');
const { initialize } = require('./databases/dbConfig.js');
const { requireAllJSFiles } = require('./scripts/requiringScript.js');
const path = require('path');
const { executeQuery } = require('./databases/queryExecution.js');
const securityDB = require('./databases/securityDB.js');
const getDateTime = require('./Constants/getDateTime.js');

require('dotenv').config();
const app = express();

async function logErrorToDatabase(error) {
  try {
    const [currentDateString, currentTimeString, CurrentDateTime] = getDateTime();
    const connection = securityDB(); // Initialize the database connection
    const query = `INSERT INTO crash_log (timestamp, error_message, stack_trace, created_at, updated_at, status) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
      new Date().toISOString(),
      error.message || 'Unknown error',
      error.stack || 'No stack trace available',
      CurrentDateTime,
      CurrentDateTime,
      "Active"
    ];

    await executeQuery(null, query, values, connection);
    console.log('Error logged successfully!');
  } catch (dbError) {
    console.error('Failed to log error to database:', dbError);
  }
}

async function initializeApp() {
  try {
    const baseDirObjects = path.join(__dirname, '/Objects');

    // await initialize(); // Uncomment if you want to initialize the database
    applyMiddleware(app);
    requireAllJSFiles(baseDirObjects);
    const port = 3000;
    app.use('', apiRoutes);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error during initialization:', error);
    await logErrorToDatabase(error);
    process.exit(1); // Exit the process after logging the error
  }
}

// Global Error Handlers for Crash Detection
process.on('uncaughtException', async (error) => {
  console.error('Uncaught Exception:', error);
  await logErrorToDatabase(error);
  process.exit(1); // Exit to allow PM2 or another process manager to restart the server
});

process.on('unhandledRejection', async (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  await logErrorToDatabase(reason);
  process.exit(1); // Exit to allow PM2 or another process manager to restart the server
});

// Initialize the app
initializeApp();
