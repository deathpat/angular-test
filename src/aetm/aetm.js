angular.module('aetm.MainModule', [
	'aetm.Config',
	'aetm.Utils',
	'aetm.ui.header.HeaderModule',
	'aetm.ui.layout.LoginLayoutModule',
	'aetm.ui.layout.BaseLayoutModule',
	'aetm.ui.login.LoginModule',
	'aetm.ui.home.HomeModule'
]);

angular.module('aetm.Config', [
	'ui.router',
	'kendo.directives'
])

.constant('AETM_LAYOUT_PATH', '/aetm/layout')
.constant('AETM_UI_MODULES_PATH', '/aetm/ui-modules')
.constant('AETM_BUSINESS_MODULES_PATH', '/aetm/business-modules')
.constant('AETM_WEBAPP_ROOT', '/portalApp')

.config(['$urlRouterProvider', function($urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/login');
}])

.run(['$location', function($location) {
	var url = $location.search();
	for (key in url) {
		alert(key + " : " + url[key]);
	}
	//$location.url('/home');
}]);

angular.module('aetm.Utils', [])

.service('httpUtils', ['$http', 'AETM_WEBAPP_ROOT', function($http, AETM_WEBAPP_ROOT) {
	var self = this;

	self.callHandler = function(sModule, sAction, oData, options) {
		var url = AETM_WEBAPP_ROOT + '/handlers/modules/' + sModule + '/' + sAction;
		var content = null;
		if (oData) {
			content = {data:oData};
		}
		return $http.post(url, content, options);
	};
}]);