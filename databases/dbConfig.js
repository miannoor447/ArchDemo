const mysql = require('mysql');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  'Enter host: ',
  'Enter user: ',
  'Enter password: ',
  'Enter database: ',
  'Enter timezone (e.g., +05:00): '
];

let config = {
  host: '',
  user: '',
  password: '',
  database: '',
  timezone: ''
};

const askQuestion = () => {
  return new Promise((resolve) => {
    let currentIndex = 0;

    const askNext = () => {
      rl.question(questions[currentIndex], (answer) => {
        switch (currentIndex) {
          case 0: config.host = answer || 'localhost'; break; // Default to 'localhost' if no input
          case 1: config.user = answer || 'root'; break;       // Default to 'root' if no input
          case 2: config.password = answer || ''; break;       // Default to empty string if no input
          case 3: config.database = answer || 'archdemo'; break; // Default to 'edarete_staging'
          case 4: config.timezone = answer || '+05:00'; break; // Default to '+05:00' if no input
        }

        currentIndex++;
        if (currentIndex < questions.length) {
          askNext();
        } else {
          rl.close();
          resolve(config);
        }
      });
    };
    askNext();
  });
};

const connectToMySql = (configuration) => {
  console.log('Using configuration:', configuration); // Log the configuration to ensure it's correct
  const connection = mysql.createConnection(configuration);
  return connection;
};

const writeConfigToFile = (config) => {
  const configPath = path.join(__dirname, '..', 'databases', 'projectDb.js'); // Path to db.js
  const configContent = `const mysql = require('mysql');

const configuration = {
  host: '${config.host}',
  user: '${config.user}',
  password: '${config.password}',
  database: '${config.database}',
  timezone: '${config.timezone}'
};

const projectDB = () => {
  const connection = mysql.createConnection(configuration);
  return connection; 
};

module.exports = projectDB;`;

  fs.writeFileSync(configPath, configContent, 'utf8');
  console.log('Configuration saved to projectDb.js');
};

const initialize = async () => {
  const dbConfig = await askQuestion();
  writeConfigToFile(dbConfig);
  const dbConnection = connectToMySql(dbConfig);
  dbConnection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
  });
};

// Export the initialize function correctly
module.exports = {
  initialize
};
