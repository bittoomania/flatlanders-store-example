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

app.controller('GalleryController', function() {
	this.current = 0;

	this.setCurrent = function(value) {
		if(value !== null)
			this.current = value;
		else
			this.current = 0;
	}
});

app.controller('ReviewController', function() {
	this.review = {};

	this.addReview = function(product) {
		this.review.createdOn = Date.now();
		product.reviews.push(this.review);
		this.review = {};
	};
});