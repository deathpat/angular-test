angular.module('aetm.ui.login.LoginModule', [
	'ui.router',
	'kendo.directives'
])

.constant('AETM_LOGIN_PATH', '/aetm/ui-modules/login')

.service('loginServices', [function() {
	var self = this;

	self.login = '';
	self.password = '';
	self.switchCommunity = false;

	self.profile = {
		login: '',
		password: '',
		switchCommunity: false
	};

	self.doLogin = function(sLogin, sPassword, bSwitchCommunity) {
		self.profile.login = sLogin;
		self.profile.password = sPassword;
		self.profile.switchCommunity = bSwitchCommunity;
	};

	self.updateLogin = function(sLogin) {
		self.profile.login = sLogin;
	};

	self.getProfile = function() {
		return self.profile;
	};

	self.getLogin = function() {
		return self.profile.login;
	};

	self.getPassword = function() {
		return self.profile.password;
	};

	self.isSwitchCommunity = function() {
		return self.profile.switchCommunity;
	};

	self.reset = function() {
		self.profile.login = '';
		self.profile.password = '';
		self.profile.switchCommunity = false;
	}
}]);