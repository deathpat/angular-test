angular.module('aetm.login.LoginModule')

.config(['$stateProvider', 'AETM_LOGIN_PATH', 'AETM_LAYOUT_PATH', 
	function($stateProvider, AETM_LOGIN_PATH, AETM_LAYOUT_PATH) {

	$stateProvider
	.state('login', {
		abstract: true,
		url: '/login',
		templateUrl: AETM_LAYOUT_PATH + '/loginLayout.html'
	})
	.state('login.step1', {
		url: '',
		templateUrl: AETM_LOGIN_PATH + '/loginStep1.html',
		controller: 'aetm.login.LoginCtrl as ctrl'
	})
	.state('login.step2', {
		templateUrl: AETM_LOGIN_PATH + '/loginStep2.html',
		controller: 'aetm.login.LoginCtrl2 as ctrl'
	});
}]);