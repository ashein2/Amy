 Meteor.methods(
      {

         'increment': function (amount, distance){

        },

        'removeExercise': function(exercise) {
            var arr = Meteor.user().savedExercises;
            console.log(arr);
            for(var i = 0; i<arr.length; i++) {
                console.log(arr[i]._id);
                if(arr[i]._id == exercise) {
                    console.log("done");
                    arr.splice(i, 1);
                    return;
                }
            }
        },

        // 'addRoutine': function(nameOfRoutine) {
            
        // },
    
        // 'addToRoutine': function(selectedExer) {
        //     if(Meteor.user().savedExercises == null) {
        //         Meteor.users.update( { _id: Meteor.userId() }, { $set: { "savedExercises": [newObject]} });
        //     } else {
        //         var savedExer = Meteor.user().savedExercises;
        //         console.log(savedExer.push(newObject) );
        //         Meteor.users.update( { _id: Meteor.userId() }, { $set: { "savedExercises": savedExer}});
        //     }

        // },

        'addsetToDB': function(amount, distance, interval){
            Practices.insert({
                time: new Date(), 
                amount: amount, 
                distance: distance,
                interval: interval
            });
        }
    })