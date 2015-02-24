var app = angular.module('gemStore', []);

app.controller('StoreController',['$http', function($http) {
	var store = this;
	store.products = [];
	$http.get('store-products.json').success(function(data) {
		store.products = data;
	});
}]);

app.controller('TabsController', function() {
	this.tab = 1;

	this.setTab = function(number) {
		this.tab = number;
	}

	this.isSet = function(number) {
		return this.tab == number;
	}
});