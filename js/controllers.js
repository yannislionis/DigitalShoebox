var shoeboxAppControllers = angular.module('shoeboxAppControllers', []);

shoeboxAppControllers.controller('TransactionListController',
	['$scope', '$location', '$log', 'MockData', function($scope, $location, $log, MockData) {
	
	$scope.$location = $location;
	$scope.transactions = MockData.data;
}]);
