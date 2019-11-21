const updateFriendsDetails = function(friendsDetails, personDetails) {
  const details = personDetails.split(",");
  const personName = details[0];
  const subDetailsOfFriends = {
    fatherName: details[1],
    motherName: details[2],
    bestFriendName: details[3]
  };
  friendsDetails[personName] = subDetailsOfFriends;
  return friendsDetails;
};

exports.updateFriendsDetails = updateFriendsDetails;
