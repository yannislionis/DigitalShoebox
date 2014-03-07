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

			$scope.getFile = function () {
				$scope.progress = 0;
				fileReader.readAsDataUrl($scope.file, $scope)
			.then(function(result) {
				$scope.imageSource = result;
			});
			};

			shoeboxApp.directive("ngFileSelect",function(){
			return {
				link: function($scope,el){
						el.bind("change", function(e){
								$scope.file = (e.srcElement || e.target).files[0];
								$scope.getFile();
							})
					}}});
}]);
