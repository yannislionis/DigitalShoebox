var shoeboxAppControllers = angular.module('shoeboxAppControllers', []);

shoeboxAppControllers.controller('TransactionListController',
	['$scope', '$location', '$log', 'TransactionData',
		function($scope, $location, $log, TransactionData) {

	$scope.$location = $location;
	$scope.transactions = TransactionData.getAll();
}]);

shoeboxAppControllers.controller('TransactionDetailsController',
	['$scope', '$routeParams', 'fileReader', 'TransactionData', 
		function($scope, $routeParams, fileReader, TransactionData) {

			$scope.transaction =
				TransactionData.get('', $routeParams.transactionId)

			$scope.getFile = function () {
				$scope.progress = 0;
				fileReader.readAsDataUrl($scope.file, $scope)
			.then(function(result) {
				$scope.imageSource = result;
			});
			};

}]);
