angular.module('aetm.Config', [
	'ui.router',
	'kendo.directives'
])

.constant('AETM_LAYOUT_PATH', '/aetm/layout')
.constant('AETM_UI_MODULES_PATH', '/aetm/ui-modules')
.constant('AETM_BUSINESS_MODULES_PATH', '/aetm/business-modules')

.config(['$urlRouterProvider', function($urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/login');
}])

.run(['$location', function($location) {
	var url = $location.search();
	for (key in url) {
		alert(key + " : " + url[key]);
	}
}]);

angular.module('aetm.MainModule', [
	'aetm.Config',
	'aetm.ui.header.HeaderModule',
	'aetm.ui.layout.LoginLayoutModule',
	'aetm.ui.layout.BaseLayoutModule',
	'aetm.ui.login.LoginModule',
	'aetm.ui.home.HomeModule'
]);