angular.module('aetm.login.LoginModule')

.controller('aetm.login.LoginCtrl', ['$state', function($state) {
	//alert('controller instance');

	var self = this;
	self.login = 'saucisse';

	self.doLogin = function doLogin() {
		$state.go('login.step2');
	};
}])

.controller('aetm.login.LoginCtrl2', ['$state', function($state) {
	//alert('controller instance 2');

	var self = this;

	self.doStep2 = function doStep2() {
		$state.go('home.main');
	};

	self.doBackToLogin = function doBackToLogin() {
		$state.go('login.step1');
	};
}]);