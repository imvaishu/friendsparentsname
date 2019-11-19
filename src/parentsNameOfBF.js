const fs = require('fs');
const createObject = require('./createObjectOfFile.js').createObject;

const parentsNameOfBF = function(name){
  let personDetails = fs.readFileSync('./file.txt','utf-8');
  personDetails = personDetails.split('\n').slice(0,-1);

  personDetails = personDetails.reduce(createObject,{});
  const bestFriendName = personDetails[name].bestFriendName;
  const bfFatherName = personDetails[bestFriendName].fatherName;
  const bfMotherName = personDetails[bestFriendName].motherName;
  return [bfFatherName,bfMotherName];
};

exports.parentsNameOfBF = parentsNameOfBF;
