
Meteor.publish('practices', function(){return Practices.find();});
Meteor.publish('players', function(){return Players.find();});
Meteor.publish('praticeLogs', function () { return Meteor.users.find({ _id: this.userId }, { fields: { savedExercises: 1 } });});

Meteor.users.allow({
  update: function (userId, user, fields, modifier) {
    // can only change your own documents
    if(user._id === userId)
    {
      Meteor.users.update({_id: userId}, modifier);
      return true;
    }
    else return false;
  }
});
