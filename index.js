//All imported files
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");

//Empty array for user input
const inputArray = [];

//This function contains the prompt to add the Manager of the team and then adds input into the empty array.
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
    teamMemberOption();

  })
};

//This function contains the prompt to add more team members and add to the empty array.
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
    message: "Enter the team member's github username.",
    when: (answers) => answers.role === "Engineer",
  },
  {
    type: 'input',
    name: 'school',
    message: "Enter the team member's school.",
    when: (answers) => answers.role === "Intern"
  },
  ])
  .then(dataTeamMember => {

    let {name, id, email, role, github, school} = dataTeamMember
    let teamMember;

    if (role === "Engineer") {
      teamMember = new Engineer (name, id, email, github);

    } else if (role === "Intern") {
      teamMember = new Intern (name, id, email, school);
    }

    inputArray.push(teamMember);
    teamMemberOption();
  })
  
};

//This function gives the user the option to add more team members or finish and build page.
const teamMemberOption = () => {
  return inquirer.prompt([
    {
      type: 'rawlist',
      name: 'next',
      message: 'Next: Would you like to add another team member or are you finished?',
      choices: ["Add team member", "Build team profile page."]
    },
  ])
  .then((answers) => {

    if(answers.next === "Add team member") {
      addTeamMember();
    }else{
      writeFile(inputArray);
    }

  })
}

//This function adds the data to generatedHTML.js and then tells that data to input in the index.html.
const writeFile = data => {
  let formattedData = generateHTML(data);
  fs.writeFile("./dist/index.html", formattedData, (err) => {
    if(err) throw err;
    console.log("Your page with team profiles has been generated.")
  });
 
};

addManager();

