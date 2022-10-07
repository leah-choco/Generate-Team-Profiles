const teamMember = require("./teamMember");

class Engineer extends teamMember{
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}

module.exports= Engineer;