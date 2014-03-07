var transactionsService = angular.module('transactionsService', []);

transactionsService.factory('TransactionData',
		['$resource', '$location', function($resource, $location){

		var couchUrl = 'http://' + $location.host() + ':5984' + '/shoebox';
		var allDocsUrl = couchUrl + '/:verb';
		console.log(couchUrl);
		var Transactions =
			$resource(
				allDocsUrl,
				{verb: '_all_docs', include_docs: 'true'},
				{ getAll:
					{ method: 'GET', isArray: true,
						transformResponse: function(data){
							var res = angular.fromJson(data);
							var results = _.map(res.rows, function(r) {
								var doc = r.doc;
								return {
									id: doc._id,
									date: doc.date,
									amount: doc.amount,
									benificiary: doc.benificiary
								};
							});
							return results;}}}
			);

	var transactionUrl = couchUrl + '/:id/'

	var Transaction = $resource(transactionUrl, {id: '@id'});

	var getAll = function (ids) {
		var response = Transactions.getAll();
		return response;};
	
	var get = function (userId, id) {
		var res = Transaction.get({'id': id});
		return res;
	};

	return {
		getAll: getAll,
		get : get }

}]);
