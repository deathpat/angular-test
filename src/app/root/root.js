angular.module('root', [
	'ui.router',
	'ngAnimate',
	'LoginModule',
	'HomeModule'
])

.config(['$urlRouterProvider', function($urlRouterProvider) {
	$urlRouterProvider
	.otherwise('/login');
}])

.controller('root.MainLayoutCtrl', ['$scope', function ($scope) {
  
}]);