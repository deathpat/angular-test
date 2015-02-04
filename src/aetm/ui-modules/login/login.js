angular.module('aetm.ui.login.LoginModule', [
	'ui.router',
	'kendo.directives'
])

.constant('AETM_LOGIN_PATH', '/aetm/ui-modules/login')

.service('loginServices', ['$rootScope', 'httpUtils', function($rootScope, httpUtils) {
	var self = this;

	self.profile = {
		login: '',
		password: '',
		switchCommunity: false,
		loggedIn: false
	};

	self.doLogin = function(sLogin, sPassword, bSwitchCommunity) {
		return httpUtils.callHandler('login', 'doLogin', {
			raviole: 'saucisse',
			login: sLogin,
			password: sPassword,
			switchCommunity: bSwitchCommunity
		}).then(function(response) {
			self.profile.login = sLogin;
			self.profile.password = sPassword;
			self.profile.switchCommunity = bSwitchCommunity;
			self.profile.loggedIn = sLogin != '';
			self.__sendLoginUpdate();
		}, function() {
			self.profile.loggedIn = false;
		});
	};

	self.doLogout = function() {
		self.reset();
	};

	self.updateLogin = function(sLogin) {
		self.profile.login = sLogin;
		self.__sendLoginUpdate();
	};

	self.getLogin = function() {
		return self.profile.login;
	};

	self.isSwitchCommunity = function() {
		return self.profile.switchCommunity;
	};

	self.isLoggedIn = function() {
		return self.profile.loggedIn;
	};

	self.reset = function() {
		self.profile.login = '';
		self.profile.password = '';
		self.profile.switchCommunity = false;
		self.profile.loggedIn = false;
		self.__sendLoginUpdate();
	}

	self.__sendLoginUpdate = function() {
		$rootScope.$broadcast('login.loginUpdate', [self.profile]);
	};
}]);