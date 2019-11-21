const fs = require("fs");
const parentsNameOfBF = require("./src/parentsNameOfBF.js").parentsNameOfBF;

const printParentsName = function() {
  const personName = process.argv[2];
  let personDetails = fs.readFileSync("./friends.txt", "utf-8");
  personDetails = personDetails.split("\n").slice(0, -1);

  const parentsName = parentsNameOfBF(personName, personDetails);
  console.log(parentsName);
};

printParentsName();
