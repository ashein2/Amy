Template.profileSavedLogs.helpers({
	'getPractices': function() {return Meteor.user().savedExercises;}
})

Template.profileSavedLogs.events({
	'click .removeExercise': function() {
		var exercise = this._id;
		console.log(exercise);
		Meteor.call('removeExercise', exercise);
	}
})