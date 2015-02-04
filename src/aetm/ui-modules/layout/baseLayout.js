angular.module('aetm.ui.layout.BaseLayoutModule', [
	'ui.router'
])

.config(['$stateProvider', 'AETM_UI_MODULES_PATH', 
	function($stateProvider, AETM_UI_MODULES_PATH) {

	$stateProvider
	.state('base-layout', {
		abstract: true,
		templateUrl: '/aetm/ui-modules/layout/baseLayout.html'
	})
	.state('base-layout.headfoot', {
		views: {
			'header': {
				templateUrl: AETM_UI_MODULES_PATH + '/header/header.html',
				controller: 'aetm.ui.header.HeaderCtrl as ctrl'
			}
		}
	});
}])