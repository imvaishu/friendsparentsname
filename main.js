const parentsNameOfBF = require('./src/parentsNameOfBF.js').parentsNameOfBF;

const main = function(){
  const name = process.argv[2];

  const parentsName  = parentsNameOfBF(name);
  console.log(parentsName);
};

main();
