const mysql = require('mysql');

const configuration = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'securityDB',
  timezone: '+05:00'
};

const securityDB = () => {
  const connection = mysql.createConnection(configuration);
  return connection; 
};

module.exports = securityDB;