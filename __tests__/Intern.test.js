const Intern = require("../lib/Intern");

test("Creates an Intern object", () => {
    const intern = new Intern("Leah", 20, "mrsleahchoco@gmail.com", "Vanderbilt University");

    expect(intern.school).toEqual(expect.any(String));

});

test("Gets role of team member", () => {
    const intern = new Intern("Leah", 20, "mrsleahchoco@gmail.com", "Vanderbilt University");

    expect(intern.getRole()).toEqual("Intern");

})