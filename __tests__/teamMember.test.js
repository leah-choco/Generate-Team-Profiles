
const teamMember = require("../lib/teamMember");





 
test('creates a teamMember object', () => {
    const teamMember = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(teamMember.name).toEqual(expect.any(String));
    expect(teamMember.id).toEqual(expect.any(Number));
    expect(teamMember.email).toEqual(expect.any(String));
});

 
test('gets teamMember name', () => {
    const teamMember = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(teamMember.getName()).toEqual(expect.any(String));
});


test('gets teamMember ID', () => {
    const teamMember = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(teamMember.getId()).toEqual(expect.any(Number));
});

test('gets teamMember email', () => {
    const teamMember = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(teamMember.getEmail()).toEqual(expect.stringContaining(teamMember.email.toString()));
});


test('gets role of teamMember', () => {
    const teamMember = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(teamMember.getRole()).toEqual("teamMember");
});