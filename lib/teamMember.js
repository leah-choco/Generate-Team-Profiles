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
    getTeamMember(){
        return 'teamMember';
    }
};
    
module.exports = teamMember;