if(Meteor.isClient){

	Template.logbook.helpers({

		'practices': function(){
			return Practices.find({}, {sort: {amount: -1}}); //time later
		},
    	'selectedClass': function (){
      		var playerId = this._id;
      		var selectedExer = Session.get('selectedExer');
      		if(playerId == selectedExer){
        	return "selected"
      		}
     	},
      	'showSelectedExer': function(){
      		var selectedExer = Session.get('selectedExer');
      		return practices.findOne(selectedExer)
    	}

	});

	Template.logbook.events({

		'submit #addset': function(event){

			event.preventDefault();
			console.log("Exercise Added");

			var amount = event.target.amount.value;
			var distance = event.target.distance.value;
			var interval = event.target.interval.value;
			Meteor.call('addsetToDB', amount , distance , interval);
		 
      },

    // 'click .setsp': function(){
    //  	var playerId = this._id;
    // 	Session.set('selectedExer', playerId);
    //   	// var selectedSet = Session.get('selectedExer');
    //   	// EllipticalWorkout.update(selectedSet, {$inc: {armSets: 1}}); 
   	// },

    // 'click .repsp': function(){
    //   var playerId = this._id;
    //   Session.set('selectedExer', playerId);
    //   	// var selectedReps = Session.get('selectedExer');
    //   	// EllipticalWorkout.update(selectedReps, {$inc: {armReps: 1}});
    // 	},

    // 	'click .setsd': function(){
    // 	var playerId = this._id;
    //   	Session.set('selectedExer', playerId);
    //   	// var selectedSet = Session.get('selectedExer');
    //   	// EllipticalWorkout.update(selectedSet, {$inc: {armSets: -1}});
    // 	},
    	
    // 	'click .repsd': function(){
    // 	var playerId = this._id;
    //   	Session.set('selectedExer', playerId);
    //   	// var selectedReps = Session.get('selectedExer');
    //   	// EllipticalWorkout.update(selectedReps, {$inc: {armReps: -1}});
    // 	},

      'click .addTo' :function() {
        var playerId = this._id;
        var tt = Practices.findOne(playerId);
        console.log(tt);
        Meteor.call('addToRoutine', tt);
        console.log("called");
      }
	});

}