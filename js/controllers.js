var shoeboxAppControllers = angular.module('shoeboxAppControllers', []);

shoeboxAppControllers.controller('TransactionListController',
	['$scope', '$location', '$log', 'TransactionData',
		function($scope, $location, $log, TransactionData) {

	$scope.$location = $location;
	$scope.transactions = TransactionData.getAll();
}]);

shoeboxAppControllers.controller('TransactionDetailsController',
	['$scope', '$routeParams', '$location', 'fileReader', 'TransactionData', 
		function($scope, $routeParams, $location, fileReader, TransactionData) {

			$scope.transaction =
				TransactionData.get('', $routeParams.transactionId)

			$scope.getFile = function () {
				$scope.progress = 0;
				fileReader.readAsDataUrl($scope.file, $scope)
			.then(function(result) {
				$scope.imageSource = result;
			});};
		$scope.$location = $location;

		$scope.confirm = function () {
			$location = $location.path('/confirm/' + $routeParams.transactionId)
		}
			
}]);
