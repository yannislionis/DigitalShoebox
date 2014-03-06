var shoeboxApp = angular.module('shoeboxApp', ['ngRoute', 'shoeboxAppControllers']);

shoeboxApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/transactions', {
				templateUrl: '/partials/translist.html',
				controller: 'TransactionListController'
			}).
			when('/transactions/:transactionId', {
				templateUrl: '/partials/transdetails.html',
				controller: 'TransactionDetailsController'
			}).
			otherwise({
				redirectTo: '/transactions'
			});
}]);

