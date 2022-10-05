const teamMember = require("./teamMember");

class Engineer extends teamMember{
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGitub(){
        return this.github;
    }
    getTeamMember (){
        return "Engineer";
    }
}

module.exports= Engineer;