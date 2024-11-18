const mysql = require('mysql');

const configuration = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'errordemo',
  timezone: '+05:00'
};

const errorDB = () => {
  const connection = mysql.createConnection(configuration);
  return connection; 
};

module.exports = errorDB;