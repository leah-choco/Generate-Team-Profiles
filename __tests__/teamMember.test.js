const teamMember = require("../lib/teamMember");

test('creates a teamMember object', () => {
    const member = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(member.name).toEqual(expect.any(String));
    expect(member.id).toEqual(expect.any(Number));
    expect(member.email).toEqual(expect.any(String));
});

 
test('gets teamMember name', () => {
    const member = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(member.getName()).toEqual(expect.any(String));
});


test('gets teamMember ID', () => {
    const member = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(member.getId()).toEqual(expect.any(Number));
});

test('gets teamMember email', () => {
    const member = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(member.getEmail()).toEqual(expect.stringContaining(member.email.toString()));
});


test('gets role of teamMember', () => {
    const member = new teamMember('Leah', 20, 'mrsleahchoco@gmail.com');

    expect(member.getRole()).toEqual("teamMember");
});