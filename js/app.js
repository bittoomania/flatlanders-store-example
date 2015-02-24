var app = angular.module('gemStore', []);

app.controller('StoreController',['$http', function($http) {
	var store = this;
	store.products = [];
	$http.get('store-products.json').success(function(data) {
		store.products = data;
	});
}]);