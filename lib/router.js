Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});
Router.route('/about', {name: 'about'}); 
Router.route('/logbook', {name: 'logbook'}); 
Router.route('/input', {name: 'listen'}); 

Router.route('/profile/:_id', {name:'profile', data: function(){ return Meteor.users.findOne()}});
Router.route('/login', {name:'login'});
Router.route('/profile/:_id/profileSavedPractices', {name:'profileSavedLogs', data: function(){ return Meteor.users.findOne({_id:this.params._id})}});
Router.route('/profileEdit/:_id', {name:'profileEdit', data: function(){ return Meteor.users.findOne({_id:this.params._id})}});
