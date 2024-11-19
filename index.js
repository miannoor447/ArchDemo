const express = require('express');
const apiRoutes = require('./dynamicRoutes.js');
const applyMiddleware = require('./ProtectionProtocols/middleware.js');
const { initialize } = require('./databases/dbConfig.js'); // Import the initialize function
const {requireAllJSFiles} = require('./scripts/requiringScript.js')
const path = require('path');

require('dotenv').config();
const app = express();

async function initializeApp() {
  try {
    const baseDirObjects = path.join(__dirname, '/Objects');

    //await initialize(); 

    applyMiddleware(app);
    requireAllJSFiles(baseDirObjects);
    const port = 3000;
    app.use('', apiRoutes);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error during initialization:', error);
  }
}

initializeApp();

