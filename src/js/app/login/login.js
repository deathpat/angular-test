angular.module('LoginModule', [
	'ui.router'
])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('login', {
		abstract: true,
		url: '/login',
		templateUrl: '/layout/loginLayout.html'
	})
	.state('login.step1', {
		url: '',
		templateUrl: '/js/app/login/loginStep1.html',
		controller: 'LoginCtrl'
	})
	.state('login.step2', {
		templateUrl: '/js/app/login/loginStep2.html',
		controller: 'LoginCtrl'
	});
}])

.controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {
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