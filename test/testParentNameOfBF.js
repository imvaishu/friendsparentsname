const assert = require('assert');
const parentsNameOfBF = require('../src/parentsNameOfBF.js').parentsNameOfBF;

describe("parentsNameOfBF",function(){
  it("should return parents name of bestFriend",function(){
    const expectedvalue = [ 'Rajender', 'Tejinder' ];
    const actualValue = "Priyanshu";
    assert.deepStrictEqual(parentsNameOfBF(actualValue),expectedvalue);
  })
});
