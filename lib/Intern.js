const teamMember = require("./teamMember");

//This is the subclass for teamMember
class Intern extends teamMember{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school =school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
};

module.exports= Intern