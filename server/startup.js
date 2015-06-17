if(Meteor.isServer){

	Meteor.startup(function(){
		if (Practices.find().fetch()==0){
			Practices.insert({
				amount: 6,
				distance: 200,
				interval: 245, //how to add :
				// repetition: 2
				// change to date link to insert sets
			});

			if(Profiles.find().count()== 0 ) {
				Profiles.insert({firstName: "Amy", lastName:"Sheinhait"})
			}

		}		

	});
}