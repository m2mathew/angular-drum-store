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
			name: 'DW CLASSIC SERIES 3-PIECE DRUM SET SHELL PACK',
			price: 5330.00,
			description: 'The DW Classic Series is designed to replicate the drums of the 30\'s, 40\'s, and 50\'s! These drums feature poplar\/mahogany shells with big oversized all-maple reinforcement hoops but a soft bearing edge, giving the drums a dark and punchy tone. DW set out to create a drum set series that would be durable enough to take the road while still pleasing vintage fanatics, and they certainly did that with the Classic Series! This shell pack includes: 9" x 12" Tom, 16" x 16" Floor Tom, 14" x 24" Bass Drum',
			canPurchase: true,
			soldOut: false,
			images: './images/dw-classic.jpg'
		},
		{
			name: 'SONOR VINTAGE 3-PIECE DRUM SET SHELL PACK',
			price: 4799.00,
			description: 'In celebration of their 140th year, Sonor is bringing back their vintage designs from the 1950s to 70s. These drums are specially designed to have that classic sound with the durability to hold up to modern playing. Vintage shells are created with hand-selected German Beech with rounded bearing edges for a full, booming sound. The Tunesafe tuning system incorporates old-school teardrop lugs that have been updated to give you a stronger, more consistent hold. Drum Sizes (Diameter x Depth):Bass Drum: 22" x 14", Tom: 13" x 8",Floor Tom: 16" x 14"',
			canPurchase: true,
			soldOut: false,
			images: './images/sonor-vintage.jpg'
		},
		{
			name: 'GRETSCH BROOKLYN EURO 5-PIECE DRUM SET SHELL PACK',
			price: 4340.00,
			description: 'The Gretsch Brooklyn drum sets were first manufactured in their namesake city in 1883, and continued to be made there for most of the 20th century. Crafted from 6-ply maple\/poplar shells and \'302\' hoops, these drums are designed to produce punchy, warm vintage sounds. The shells also have a 30-degree bearing edge, and the interiors are finished with Silver Sealer as well as an internal label containing the shell\'s model number and serial number. The 3mm thick hoops are double-flanged, a hard-to-find style that was popular up to the 1950s. The rest of the hardware is the same found on the Gretsch USA Custom drums. As a salute to the return of the Brooklyn series, each drum includes the vintage-style round badge.',
			canPurchase: true,
			soldOut: false,
			images: './images/gretsch-brooklyn.jpg'
		}
	];
})();
