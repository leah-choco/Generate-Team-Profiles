//All imported files
const generateHTML = require("./src/generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const inputArray = [];



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
  .then(inputManager =>{
    const {name, id, email, officeNumber} = inputManager;
    const manager = new Manager (name, id, email, officeNumber);

    inputArray.push(manager);

  })
};

const addTeamMember = () => {
  return inquirer.prompt([
  {
    type: 'rawlist',
    name: 'role',
    message: 'Next: Would you like to add an Engineer or an Intern?',
    choices: ["Engineer", "Intern"]
  },
  {
    type: 'input',
    name: 'name',
    message: "Enter the team member's name",
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter the team member's id",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the team member's email address.",
  },
  {
    type: 'input',
    name: 'github',
    message: "Enter the team member's github username."
    //Figure out how to choose(input) => input.role === "Engineer",
  },
  {
    type: 'input',
    name: 'school',
    message: "Enter the team member's school."
    //figure out how to choose (input) => input.role === "Intern"
  },
  ])
  .then(dataTeamMember => {

    let {name, id, email, role, github, school} = dataTeamMember
    let teamMember;

    if (role === "Engineer"){
      teamMember = new Engineer (name, id, email, github);

    }else (role === "Intern"){
      teamMember = new Intern (name, id, email, school);
    }

    inputArray.push(teamMember);
  })
  
};