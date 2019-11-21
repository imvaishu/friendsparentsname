const assert = require("assert");
const parentsNameOfBF = require("../src/parentsNameOfBF.js").parentsNameOfBF;

describe("parentsNameOfBF", function() {
  it("should return parents name of bestFriend", function() {
    const personDetails = [
      "Priyanshu,ram,nandini,Ragini",
      "Ragini,Rajender,Tejinder,Shweta"
    ];
    const expectedvalue = ["Rajender", "Tejinder"];
    const actualValue = parentsNameOfBF("Priyanshu", personDetails);
    assert.deepStrictEqual(actualValue, expectedvalue);
  })