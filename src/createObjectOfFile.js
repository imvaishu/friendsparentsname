const createObject = function(associatives,value){
  let data = value.split(',');
  let key = data[0];
  let details = {"fatherName":data[1],
    "motherName":data[2],
    "bestFriendName":data[3]
  };
  associatives[key] = details;
  return associatives;
};

exports.createObject = createObject;
