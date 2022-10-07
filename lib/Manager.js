//Importing teamMember constructor
const teamMember = require("./teamMember");

class Manager extends teamMember {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;