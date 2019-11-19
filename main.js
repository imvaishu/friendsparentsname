const fs = require('fs');
const createObject = require("./src/createObjectOfFile.js").createObject;

const main = function(){

let readFile = fs.readFileSync("./src/file.txt","utf-8");
readFile  = readFile.split('\n').slice(0,-1);

const newData = readFile.reduce(createObject,{});
  console.log(newData);
}

main();
