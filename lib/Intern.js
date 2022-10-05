const teamMember = require("./teamMember");

class Intern extends teamMember{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school =school;
    }

    getSchool(){
        return this.school;
    }

    getTeamMember(){
        return "Intern";
    }
};

module.exports= Intern