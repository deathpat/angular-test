angular.module('aetm.ui.header.HeaderModule', [
	'ui.router'
])

.constant('AETM_HEADER_PATH', '/aetm/ui-modules/header')

.controller('aetm.ui.header.HeaderCtrl', ['$scope', 'loginServices', function($scope, loginServices) {
	var self = this;
	self.login = loginServices.getLogin();

	$scope.$on('login.loginUpdate', function(evt) {
		self.login = loginServices.getLogin();
	});
}]);