const mysql = require('mysql');

const configuration = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'archdemo',
  timezone: '+05:00'
};

const projectDB = () => {
  const connection = mysql.createConnection(configuration);
  return connection; 
};

module.exports = projectDB;