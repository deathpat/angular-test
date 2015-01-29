LoginModule.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('login', {
		abstract: true,
		url: '/login',
		templateUrl: '/layout/loginLayout.html',
		controller: 'LoginLayoutCtrl',
		onEnter: ['$state', function($state) {
			//alert('fade in');
		}],
		onExit: ['$state', function($state) {
			//alert('fade out');
		}]
	})
	.state('login.step1', {
		url: '',
		templateUrl: '/app/login/loginStep1.html',
		controller: 'LoginCtrl'
	})
	.state('login.step2', {
		url: '.patate',
		templateUrl: '/app/login/loginStep2.html',
		controller: 'LoginCtrl'
	});
}])

.controller('LoginLayoutCtrl', ['$scope', '$rootScope', '$state', '$animate', function($scope, $rootScope, $state, $animate) {
	var inTransition = false;
	$rootScope.$on('$stateChangeStart', function(evt, toState) {
		if (inTransition) {
			return;
		}
		var isFromLoginState = $state.$current.toString().indexOf('login') === 0;
		var isToLoginState = toState.name.indexOf('login') === 0;
		var fadeIn = !isFromLoginState && isToLoginState;
		var fadeOut = isFromLoginState && !isToLoginState;
		if (fadeIn || fadeOut) {
			evt.preventDefault();
			if (fadeOut) {
				var oDiv = angular.element(document.getElementById('loginContent'));
				$animate.addClass(oDiv, 'hide').then(function() {
					inTransition = true;
					$state.transitionTo(toState).then(function() {
						inTransition = false;
					});
				});
			} else {
				inTransition = true;
				$state.transitionTo(toState).then(function() {
					var oDiv = angular.element(document.getElementById('loginContent'));
					oDiv.addClass('hide');
					inTransition = false;
					$animate.removeClass(oDiv, 'hide');
				});
			}
		}
	});
}]);