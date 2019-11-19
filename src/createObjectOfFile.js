const createObject = function(associatives,value){
  let data = value.split(',');
  let key = data[0];
  value = data.slice(1,3);
  associatives[key] = value;
  return associatives;
};

exports.createObject = createObject;
