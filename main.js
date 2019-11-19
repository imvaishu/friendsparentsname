const fs = require('fs');
const createObject = require("./src/createObjectOfFile.js").createObject;
const getParentsNameOfBF = require("./src/getParentsNameOfBF.js").getParentsNameOfBF;

const main = function(){
  let readFile = fs.readFileSync("./src/file.txt","utf-8");
  readFile  = readFile.split('\n').slice(0,-1);

  const newData = readFile.reduce(createObject,{});
  const result = readFile.reduce(getParentsNameOfBF,newData); 
  console.log(result);
}

main();
