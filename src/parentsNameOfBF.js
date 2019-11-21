const fs = require("fs");
const updateFriendsDetails = require("./updateFriendsDetails.js")
  .updateFriendsDetails;

const parentsNameOfBF = function(personName, personDetails) {
  const person = personDetails.reduce(updateFriendsDetails, {});
  const bestFriendName = person[personName].bestFriendName;
  const bfFatherName = person[bestFriendName].fatherName;
  const bfMotherName = person[bestFriendName].motherName;
  return [bfFatherName, bfMotherName];
};

exports.parentsNameOfBF = parentsNameOfBF;
