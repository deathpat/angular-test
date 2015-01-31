angular.module('aetm.home.HomeModule', [
	'ui.router'
])

.constant('AETM_HOME_PATH', '/aetm/modules/home')

.config(['$stateProvider', 'AETM_HOME_PATH', 'AETM_LAYOUT_PATH', 
	function($stateProvider, AETM_HOME_PATH, AETM_LAYOUT_PATH) {

	$stateProvider
	.state('home', {
		abstract: true,
		url: '/home',
		templateUrl: AETM_LAYOUT_PATH + '/baseLayout.html'
	})
	.state('home.main', {
		url: '',
		templateUrl: AETM_HOME_PATH + '/homeContent.html',
		controller: 'aetm.home.HomeContentCtrl as ctrl'
	});
}])

.controller('aetm.home.HomeContentCtrl', ['$state', function($state) {
	var self = this;
	self.doLogout = function() {
		$state.go('login.step1');
	};
}]);