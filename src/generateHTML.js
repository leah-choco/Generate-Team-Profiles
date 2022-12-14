//Importing teamMember class and functions
const teamMember = require("../lib/teamMember");

//Template to generate the manager cardbased on user input.
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`
};

//Template to generate the Engineer card based on user input.
const generateEnginner = function (engineer){
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>`
};

//Template to generate the Intern card based on user input.
const generateIntern = function (intern){
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>`
};

//This function sorts through the roles to get the approparite data.
const generateHTML = (data) => {
    
   let cardArray = [];

   for(let i = 0; i<data.length; i++){

        if (data[i].getRole() === "Manager") {
            const managerCard = generateManager(data[i]);
            cardArray.push(managerCard);
        }

        if (data[i].getRole() === "Engineer") {
            const engineerCard = generateEnginner(data[i]);
            cardArray.push(engineerCard);
        }

        if (data[i].getRole() === "Intern") {
            const internCard = generateIntern(data[i]);
            cardArray.push(internCard)
        }
    }

    return generateFinal(cardArray.join(""));
};

//This template is for the above templates to complete the HTML file.
const generateFinal = function (teamMemberCards){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>My Team</title>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
     <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
          <div id="header-style">
              <h2 class="text-center">Team Profile</h2>
          </div>
        </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${teamMemberCards}
              </div>
          </div>
      </main>       


    
    
    </body>
    </html>`
};

module.exports= generateHTML;