var appDir = angular.module('store-directives', []);

appDir.directive('productDescription', function() {
	return {
		'restrict' : 'E',
		'templateUrl' : 'product-description.html'
	};
});

appDir.directive('productSpecs', function() {
	return {
		'restrict' : 'A',
		'templateUrl' : 'product-specs.html'
	};
});

appDir.directive('productReviews', function() {
	return {
		'restrict' : 'E',
		'templateUrl' : 'product-reviews.html'
	};
});

appDir.directive('productTabs', function() {
	return {
		'restrict' : 'E',
		'templateUrl' : 'product-tabs.html',
		'controller' : function() {
			this.tab = 1;

			this.setTab = function(number) {
				this.tab = number;
			}

			this.isSet = function(number) {
				return this.tab == number;
			}
		},
		'controllerAs' : 'tab'
	};
});

appDir.directive('productGallery', function() {
	return {
		'restrict' : 'E',
		'templateUrl' : 'product-gallery.html',
		'controller' : function() {
			this.current = 0;

			this.setCurrent = function(value) {
				if(value !== null)
					this.current = value;
				else
					this.current = 0;
			}
		},
		'controllerAs' : 'gallery'
	};
});