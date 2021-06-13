const inquirer = require("inquirer");
const db = require("./db/connection");
const tableFormat = require("console.table");

function viewAllDepartments() {
  const sql = "SELECT * from department";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
  });
  userPrompt();
}

function viewAllRoles() {
  const sql = `SELECT role.id, role.title, role.salary, department.name 
              FROM role 
              LEFT JOIN department
              ON department.id = role.id`;

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
  });
  userPrompt();
}

function viewAllEmployees() {
  const sql = `SELECT employee.*, role.title, role.salary, department.name FROM employee
                LEFT JOIN role
                ON role.id = employee.role_id
                LEFT JOIN department
                ON role.department_id = department.id`;

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
  });
  userPrompt;
}

function userPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userInput",
        pageSize: 8,
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee's role",
          "Quit application",
        ],
      },
    ])
    .then((response) => {
      switch (response.userInput) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          //function
          break;
        case "Add a role":
          //function
          break;
        case "Add an employee":
          //function
          break;
        case "Update an employee's role":
          //function
          break;
        case "Quit application":
          process.exit();
          break;
        default:
          console.log("error");
      }
    });
}

userPrompt();
