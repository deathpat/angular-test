angular.module('aetm.Config', [
	'ui.router'
])

.constant('AETM_LAYOUT_PATH', '/aetm/layout')

.config(['$urlRouterProvider', function($urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/login');
}]);

angular.module('aetm.MainModule', [
	'aetm.Config',
	'aetm.login.LoginModule',
	'aetm.home.HomeModule'
]);