const Engineer = require("../lib/Engineer");

test("Creates an Engineer object", () => {
    const engineer = new Engineer("Leah", 20, "mrsleahchoco@gmail.com", "leah-choco");

    expect(engineer.github).toEqual(expect.any(String));

});

test("Gets role of team member", () => {
    const engineer = new Engineer("Leah", 20, "mrsleahchoco@gmail.com", "leah-choco");

    expect(engineer.getRole()).toEqual("Engineer");

})