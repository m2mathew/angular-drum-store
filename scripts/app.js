'use strict';

(function(){
	var app = angular.module('store', []);  // a module that is loaded to the index.html page where it is called by a directive

	app.controller('StoreController', function() {

		this.products = gems;
	});

	app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
			canPurchase: false,
			soldOut: false,
			images: '../images/dodecahedron-01-full.jpg'
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Five sides a pentagonal gem make. This beauty is a steal, but only for the listed price.',
			canPurchase: true,
			soldOut: false,
			images: '../images/pentagon-01-full.jpeg'
		},
		{
			name: 'Hexagonal Gem',
			price: 10.95,
			description: 'This gem is brand new. Never been used. Also, there are six sides.',
			canPurchase: true,
			soldOut: false,
			images: '../images/hexagon-01-full.jpg'
		}
	];
})();
