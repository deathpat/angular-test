angular.module('aetm.ui.header.HeaderModule', [
	'ui.router'
])

.constant('AETM_HEADER_PATH', '/aetm/ui-modules/header')

.controller('aetm.ui.header.HeaderCtrl', ['loginServices', function(loginServices) {
	var self = this;
	self.profile = loginServices.getProfile();
}]);