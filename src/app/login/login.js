var LoginModule = angular.module('LoginModule', [
	'ui.router'
]);

LoginModule.controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.login = function() {
		$state.go('login.step2');
	};

	$scope.step2 = function() {
		$state.go('home.main');
	}

	$scope.backToLogin = function() {
		$state.go('login.step1');
	}
}]);