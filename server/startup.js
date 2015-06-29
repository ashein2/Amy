if(Meteor.isServer){

	Meteor.startup(function(){
		if (Practices.find().fetch()==0){
			Practices.insert({
				amount: 6,
				distance: 200,
				minute: 2, //how to add :
				second: 45,
				// repetition: 2
				// change to date link to insert sets
			});

			if(Profiles.find().count()== 0 ) {
				Profiles.insert({firstName: "Amy", lastName:"Sheinhait"})
			}

			// if(Players.find().count()== 0 ) {
			// 	var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
   //               "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"];
   //               _.each(names, function (name) {
			// 	      Players.insert({
			// 	        name: name, score: Math.floor(Random.fraction() * 10) * 5
			// 	      });
			// 	   });
			// }
		}		

	});
}