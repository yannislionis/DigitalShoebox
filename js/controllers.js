var shoeboxAppControllers = angular.module('shoeboxAppControllers', []);

shoeboxAppControllers.controller('TransactionListController',
	['$scope', '$location', '$log', 'MockData',
		function($scope, $location, $log, MockData) {

	$scope.$location = $location;
	$scope.transactions = MockData.getAll();
}]);

shoeboxAppControllers.controller('TransactionDetailsController',
	['$scope', '$routeParams', 'fileReader', 'MockData', 
		function($scope, $routeParams, fileReader, MockData) {

			$scope.transaction =
				MockData.get('', parseInt($routeParams.transactionId))

			$scope.getFile = function () {
				$scope.progress = 0;
				fileReader.readAsDataUrl($scope.file, $scope)
			.then(function(result) {
				$scope.imageSource = result;
			});
			};

}]);
