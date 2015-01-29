angular.module('HomeModule', [
	'ui.router'
])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('home', {
		abstract: true,
		url: '/home',
		templateUrl: '/layout/baseLayout.html'
	})
	.state('home.main', {
		url: '',
		templateUrl: '/app/home/homeContent.html',
		controller: 'HomeCtrl'
	});
}])

.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.logout = function() {
		$state.go('login.step1');
	};
}]);