var mockDataService = angular.module('mockDataService', []);

mockDataService.factory('MockData', [function(){
	return {
		data: [{
			'id': 1,
			'date': '6 March 2014',
			'benificiary': 'Addison Cars',
			'amount': 25.0
		},
	{
		'id': 2,
		'date': '2 February 2014',
		'benificiary': 'Pizza Express',
		'amount': 87.64
	},
	{
		'id': 3,
		'date': '28 January 2014',
		'benificiary': 'Cafe Nero',
		'amount': 5.65
	}]
	}

}]);
