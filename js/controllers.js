var shoeboxAppControllers = angular.module('shoeboxAppControllers', []);

shoeboxAppControllers.controller('TransactionListController',
	['$scope', '$location', '$log', 'MockData',
		function($scope, $location, $log, MockData) {

	$scope.$location = $location;
	$scope.transactions = MockData.getAll();
}]);

shoeboxAppControllers.controller('TransactionDetailsController',
	['$scope', '$routeParams', 'MockData', 
		function($scope, $routeParams, MockData) {

			$scope.transaction =
				MockData.get('', parseInt($routeParams.transactionId))
}]);
