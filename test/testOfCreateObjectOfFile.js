const assert = require('assert');
const createObject = require('../src/createObjectOfFile.js').createObject;

describe("creteObject",function(){
  it("should return object of input which is given by usr",function(){
   const expectedValue = {"Priyanshu" : ["sahil","shanti"]};
   const  actualValue = "Priyanshu,sahil,shanti,ragini";
    assert.deepStrictEqual(createObject({},actualValue),expectedValue);
  })
});
