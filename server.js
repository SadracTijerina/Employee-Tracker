const inquirer = require("inquirer");
const db = "./db/connection";
const tableFormat = require("console.table");

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
          //function
          break;
        case "View all roles":
          //function
          break;
        case "View all employees":
          //function
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
          //function
          break;
        default:
          console.log("error");
      }
    });
}

userPrompt();
