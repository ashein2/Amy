if(Meteor.isServer){

	Meteor.startup(function(){
		if (Practices.find().fetch()==0){
			Practices.insert({
				amount: 6,
				distance: 200,
				stroke: "free",
				minute: 2, //how to add :
				second: 45
				// repetition: 2
				// change to date link to insert sets
			});
		}
		if (Players.find().fetch()==0){
				Players.insert({
					name:"Amy", score: 10000
				});
			
				Players.insert({
	    			name:"Jimmy" , score: 28000
				});
				Players.insert({
	    			name:"Eduardo" , score: 42500
				});
				Players.insert({
	    			name:"Sam" , score: 14000
				});
				Players.insert({
	    			name:"Danny" , score: 62025
				});
				Players.insert({
	    			name:"Margot" , score: 555500
				});
				Players.insert({
	    			name:"Mike" , score: 100025
				});
			}


	});
}