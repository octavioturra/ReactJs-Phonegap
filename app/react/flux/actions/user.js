var ReactFlux = require('react-flux');

var userConstants = require('../constants/user');

var loginService = require('../services/login');

module.exports = ReactFlux.createActions({

	login: [userConstants.LOGIN, function (email, password) {
		console.log("UserActions.login");
		return loginService.login(email, password);
	}],

	logout: [userConstants.LOGOUT, function () {
		console.log("UserActions.logout");
		return loginService.logout();
	}],

	edit: [userConstants.EDIT_DATA, function(username){
		console.log("UserActions.edit");
		return {
			username: username
		}
	}]
	
});