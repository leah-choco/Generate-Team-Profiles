//All imported files
const generateHTML = require("./src/generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");



const addManager = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name of the mananger of the team.',
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the manager's ID.",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the mamnger's email address.",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the manager's office number.",
    },
    
    ])

}