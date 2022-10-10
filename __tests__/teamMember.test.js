const teamMember = require("../lib/teamMember");



describe("teamMember", () => {
    it("Creates an object named teamMember", () => {
        const teamMember = new teamMember("Leah", 20, "mrsleahchoco@gmail.com")

        expect(teamMember.name).toEqual(expect.any(String));
        expect(teamMember.id).toEqual(expect.any(Number));
        expect(teamMember.email).toEqual(expect.any(String));
    });
});

describe("getName", () => {
    it("Gets the teamMember name", () => {
        const teamMember = new teamMember ("Leah", 20, "mrsleahchoco@gmail.com");

        expect (teamMember.getName().toEqual(expect.any(String)));
    });
});

describe("getID", () => {
    it("Gets the teamMember ID", () => {
        const teamMember = new teamMember ("Leah", 20, "mrsleahchoco@gmail.com");

        expect (teamMember.getID().toEqual(expect.any(Number)));
    });
});

describe("getEmail", () => {
    it("Gets the teamMember email", () => {
        const teamMember = new teamMember ("Leah", 20, "mrsleahchoco@gmail.com");

        expect (teamMember.getEmail().toEqual(expect.any(String)));
    });
});

describe("getRole", () => {
    it("Gets the teamMember role", () => {
        const teamMember = new teamMember ("Leah", 20, "mrsleahchoco@gmail.com");

        expect (teamMember.getRole().toEqual("teamMember"));
    });
});