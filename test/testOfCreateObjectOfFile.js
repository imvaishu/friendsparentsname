const assert = require("assert");
const updateFriendsDetails = require("../src/updateFriendsDetails.js")
  .updateFriendsDetails;

describe("creteObject", function() {
  it("should return object if object is empty", function() {
    let expectedValue = {
      Priyanshu: {
        fatherName: "sahil",
        motherName: "shanti",
        bestFriendName: "ragini"
      }
    };
    let actualValue = "Priyanshu,sahil,shanti,ragini";
    assert.deepStrictEqual(
      updateFriendsDetails({}, actualValue),
      expectedValue
    );
  });
  it("should return object if object is modified", function() {
    expectedValue = {
      Priyanshu: {
        fatherName: "sahil",
        motherName: "shanti",
        bestFriendName: "ragini"
      },
      ragini: {
        fatherName: "ram",
        motherName: "nandini",
        bestFriendName: "sana"
      }
    };
    const object = {
      Priyanshu: {
        fatherName: "sahil",
        motherName: "shanti",
        bestFriendName: "ragini"
      }
    };
    actualValue = "ragini,ram,nandini,sana";
    assert.deepStrictEqual(
      updateFriendsDetails(object, actualValue),
      expectedValue
    );
  });
});
