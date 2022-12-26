const mysql = require('mysql');

// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hospital_managment'
});

connection.connect(error => {
  if (error) {
    console.error(error.message);
  } else {
    console.log('Successfully connected to MySQL database');
  }
});

module.exports = connection;
