var shoeboxApp = 
	angular.module(
		'shoeboxApp',
		['ngRoute', 'shoeboxAppControllers', 'mockDataService']);

shoeboxApp.config(['$routeProvider',
	function($routeProvider){
		
		// set up routing
		$routeProvider.
			when('/transactions', {
				templateUrl: '/partials/trlist.html',
				controller: 'TransactionListController'
			}).
			when('/transactions/:transactionId', {
				templateUrl: '/partials/trdetails.html',
				controller: 'TransactionDetailsController'
			}).
			otherwise({
				redirectTo: '/transactions'
			});
}]);

