const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "afadfaf",
    database: "EmployeeTracker",
  },
  console.log("Connected to the employee tracker database.")
);

module.exports = db;
