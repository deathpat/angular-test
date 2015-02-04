angular.module('aetm.ui.home.HomeModule', [
	'ui.router'
])

.constant('AETM_HOME_PATH', '/aetm/ui-modules/home')

.config(['$stateProvider', 'AETM_HOME_PATH', 
	function($stateProvider, AETM_HOME_PATH) {

	$stateProvider
	.state('home', {
		parent: 'base-layout.headfoot',
		abstract: true,
		url: '/home'
	})
	.state('home.main', {
		url: '',
		views: {
			'content@base-layout': {
				templateUrl: AETM_HOME_PATH + '/homeContent.html',
				controller: 'aetm.ui.home.HomeContentCtrl as ctrl'
			}
		}
	});
}])

.controller('aetm.ui.home.HomeContentCtrl', ['$state', 'loginServices', function($state, loginServices) {
	var self = this;

	self.login = loginServices.getLogin();

	self.doLogout = function() {
		loginServices.doLogout();
		$state.go('login.step1');
	};

	self.setLogin = function() {
		loginServices.updateLogin(self.login);
	};
}]);