var shoeboxApp = 
	angular.module(
		'shoeboxApp',
		['ngRoute', 'ngResource', 'shoeboxAppControllers', 'transactionsService']);

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

shoeboxApp.directive("ngFileSelect",function(){
return {
	link: function($scope,el){
			el.bind("change", function(e){
					$scope.file = (e.srcElement || e.target).files[0];
					$scope.getFile();
				})
		}}});

var UploadController = function ($scope, fileReader) {
     console.log(fileReader)
    $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };

    $scope.$on("fileProgress", function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });

};

shoeboxApp.directive("ngFileSelect",function(){

  return {
    link: function($scope,el){

      el.bind("change", function(e){

        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      })

    }

  }


})
