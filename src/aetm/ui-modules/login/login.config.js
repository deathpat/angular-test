angular.module('aetm.ui.login.LoginModule')

.config(['$stateProvider', 'AETM_LOGIN_PATH', 
	function($stateProvider, AETM_LOGIN_PATH) {

	$stateProvider
	.state('login', {
		parent: 'loginlayout',
		abstract: true,
		url: '/login'
	})
	.state('login.step1', {
		url: '',
		views: {
			'content@loginlayout': {
				templateUrl: AETM_LOGIN_PATH + '/loginStep1.html',
				controller: 'aetm.ui.login.LoginCtrl as ctrl'
			}
		}
	})
	.state('login.step2', {
		views: {
			'content@loginlayout': {
				templateUrl: AETM_LOGIN_PATH + '/loginStep2.html',
				controller: 'aetm.ui.login.LoginCtrl2 as ctrl'
			}
		}
	});
}]);