angular.module('aetm.ui.login.LoginModule')

.controller('aetm.ui.login.LoginCtrl', 
	['$state', 'loginServices', '$location', 
	function($state, loginServices, $location) {

	var self = this;
	self.login = loginServices.getLogin();
	self.password = '';
	self.switchCommunity = loginServices.isSwitchCommunity();

	self.doLogin = function doLogin() {
		loginServices.doLogin(self.login, self.password, self.switchCommunity)
		.then(function(profile) {
			if (self.switchCommunity) {
				$state.go('login.step2');
			} else {
				$location.url('/home');
			}
		}, function(error) {
			alert('ko');
			throw error;
		});
	};
}])

.controller('aetm.ui.login.LoginCtrl2', 
	['$state', 'loginServices', '$location', 
	function($state, loginServices, $location) {

	var self = this;
	self.login = loginServices.getLogin();
	self.community = '';

	self.doStep2 = function doStep2() {
		$location.url('/home');
	};

	self.doBackToLogin = function doBackToLogin() {
		$state.go('login.step1');
	};
}]);