angular.module('root', [
	'ui.router',
	'LoginModule',
	'HomeModule'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/login');
}])

.controller('root.MainLayoutCtrl', ['$scope', function ($scope) {
  
}]);