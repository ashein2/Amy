if(Meteor.isClient){

	Template.leaderboard.helpers({

		'player': function(){
			return Players.find({}, {sort: {score: 1}});
		}
	});

}