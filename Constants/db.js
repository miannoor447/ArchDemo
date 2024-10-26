const mysql = require('mysql');

const configuration = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'architecture_demo',
  timezone: '+05:00'
};

const connectToMySql = () => {
  const connection = mysql.createConnection(configuration);
  return connection; 
};

module.exports = connectToMySql;