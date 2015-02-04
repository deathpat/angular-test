angular.module('aetm.ui.layout.LoginLayoutModule', [
	'ui.router'
])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('loginlayout', {
		abstract: true,
		templateUrl: '/aetm/ui-modules/layout/loginLayout.html'
	});
}])