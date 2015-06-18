// var fullInterval = [
//   {minute: "1", second : "45"}
// ];

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
			var minute = event.target.minute.value;
      var second = event.target.second.value;
			Meteor.call('addsetToDB', parseInt(amount) , parseInt(distance) , parseInt(minute) , parseInt(second));
		 
      },

    'click .amountp': function(){
     	var playerId = this._id;
    	Session.set('selectedExer', playerId);
      	var selectedAmount = Session.get('selectedExer');
      	Practices.update(selectedAmount, {$inc: {amount: 1}}); 
   	},

    'click .distp': function(){
      var playerId = this._id;
      Session.set('selectedExer', playerId);
      	var selectedDistance = Session.get('selectedExer');
      	Practices.update(selectedDistance, {$inc: {distance: 25}});
    	},
      'click .minp': function(){
      var playerId = this._id;
      Session.set('selectedExer', playerId);
        var selectedMinute = Session.get('selectedExer');
        Practices.update(selectedMinute, {$inc: {minute: 1}}); 
    },
    'click .secp': function(){
      var playerId = this._id;
      Session.set('selectedExer', playerId);
        var selectedSecond = Session.get('selectedExer');
        Practices.update(selectedSecond, {$inc: {second: 5}}); 
    },


    	'click .amountd': function(){
    	var playerId = this._id;
      	Session.set('selectedExer', playerId);
      	var selectedAmount = Session.get('selectedExer');
      	Practices.update(selectedAmount, {$inc: {amount: -1}});
    	},
    	
    	'click .distd': function(){
    	var playerId = this._id;
      	Session.set('selectedExer', playerId);
      	var selectedDistance = Session.get('selectedExer');
      	Practices.update(selectedDistance, {$inc: {distance: -25}});
    	},
      'click .mind': function(){
      var playerId = this._id;
        Session.set('selectedExer', playerId);
        var selectedMinute = Session.get('selectedExer');
        Practices.update(selectedMinute, {$inc: {minute: -1}});
      },
      'click .secd': function(){
      var playerId = this._id;
        Session.set('selectedExer', playerId);
        var selectedSecond = Session.get('selectedExer');
        Practices.update(selectedSecond, {$inc: {second: -5}});
      },

      'click .addTo' :function() {
        var playerId = this._id;
        var tt = Practices.findOne(playerId);
        console.log(tt);
        Meteor.call('addToRoutine', tt);
        console.log("called");
      },

      'click .btn btn-default': function(){
      var playerId = this._id;
      Session.set('selectedExer', playerId);
        var selectedSet = Session.get('selectedExer');
        Practices.update($selectedSet.remove()); 
    }
	});

}