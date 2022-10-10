const Manager = require("../lib/Manager");

test("Creates a Manager object", () => {
    const manager = new Manager("Leah", 20, "mrsleahchoco@gmail.com", 5);

    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test("Gets role of team member", () => {
    const manager = new Manager("Leah", 20, "mrsleahchoco@gmail.com");

    expect(manager.getRole()).toEqual("Manager");

});