if(Meteor.isServer){

	Meteor.startup(function(){
		if (Practices.find().fetch()==0){
			Practices.insert({
				amount: 6,
				distance: 200,
				minute: 2, //how to add :
				second: 45
				// repetition: 2
				// change to date link to insert sets
			});
		}
		if (Players.find().fetch()==0){
				Players.insert({
					name:"Amy", score: 10
				});
			
				Players.insert({
	    			name:"Jimmy" , score: 28 
				});
				Players.insert({
	    			name:"Eduardo" , score: 42
				});
				Players.insert({
	    			name:"Sam" , score: 14
				});
				Players.insert({
	    			name:"Danny" , score: 62
				});
				Players.insert({
	    			name:"Margot" , score: 5
				});
				Players.insert({
	    			name:"Mike" , score: 1
				});
			}


	});
}