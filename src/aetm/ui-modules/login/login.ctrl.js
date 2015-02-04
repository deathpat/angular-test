angular.module('aetm.ui.login.LoginModule')

.controller('aetm.ui.login.LoginCtrl', ['$state', 'loginServices', function($state, loginServices) {
	var self = this;
	self.login = loginServices.getLogin();
	self.password = '';
	self.switchCommunity = loginServices.isSwitchCommunity();

	self.doLogin = function doLogin() {
		loginServices.doLogin(self.login, self.password, self.switchCommunity)
		.then(function() {
			if (self.switchCommunity) {
				$state.go('login.step2');
			} else {
				$state.go('home.main');
			}
		}, function() {
			alert('coin');
		});
	};
}])

.controller('aetm.ui.login.LoginCtrl2', ['$state', 'loginServices', function($state, loginServices) {
	var self = this;
	self.login = loginServices.getLogin();
	self.community = '';

	self.doStep2 = function doStep2() {
		$state.go('home.main');
	};

	self.doBackToLogin = function doBackToLogin() {
		$state.go('login.step1');
	};
}]);