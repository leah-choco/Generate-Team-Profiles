//This class establishes the data that will be included for each role.
class teamMember {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole(){
        return 'teamMember';
    }
};
    
module.exports = teamMember;