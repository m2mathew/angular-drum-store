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
			specifications: 'Three Piece Set, 3 Ply Mahogany\/Poplar\/Mahogany Shells, 6 Ply Reinforcement Rings, Chrome Hardware, True-Pitch Tension Rods, Natural Hard Satin Finish',
			reviews: '',
			canPurchase: true,
			soldOut: false,
			images: './images/dw-classic.jpg'
		},
		{
			name: 'SONOR VINTAGE 3-PIECE DRUM SET SHELL PACK',
			price: 4799.00,
			description: 'In celebration of their 140th year, Sonor is bringing back their vintage designs from the 1950s to 70s. These drums are specially designed to have that classic sound with the durability to hold up to modern playing. Vintage shells are created with hand-selected German Beech with rounded bearing edges for a full, booming sound. The Tunesafe tuning system incorporates old-school teardrop lugs that have been updated to give you a stronger, more consistent hold. Drum Sizes (Diameter x Depth):Bass Drum: 22" x 14", Tom: 13" x 8",Floor Tom: 16" x 14"',
			specifications: '9-Ply German Beech Shells, Round Bearing Edges, Chrome Hardware, Triple-Flanged Hoops',
			reviews: '',
			canPurchase: true,
			soldOut: false,
			images: './images/sonor-vintage.jpg'
		},
		{
			name: 'GRETSCH BROOKLYN EURO 5-PIECE DRUM SET SHELL PACK',
			price: 4340.00,
			description: 'The Gretsch Brooklyn drum sets were first manufactured in their namesake city in 1883, and continued to be made there for most of the 20th century. Crafted from 6-ply maple\/poplar shells and \'302\' hoops, these drums are designed to produce punchy, warm vintage sounds. The shells also have a 30-degree bearing edge, and the interiors are finished with Silver Sealer as well as an internal label containing the shell\'s model number and serial number. The 3mm thick hoops are double-flanged, a hard-to-find style that was popular up to the 1950s. The rest of the hardware is the same found on the Gretsch USA Custom drums. As a salute to the return of the Brooklyn series, each drum includes the vintage-style round badge.',
			specifications: 'Maple/Poplar Shells, 302 Hoops, Silver Finished Interior, USA Custom Hardware, Interior Labels, Round Badge',
			reviews: '',
			canPurchase: true,
			soldOut: false,
			images: './images/gretsch-brooklyn.jpg'
		},
		{
			name: 'Q DRUM CO. COPPER 3-PIECE DRUM SET SHELL PACK',
			price: 3405.00,
			description: 'With their Copper Drum Set, the Q Drum Company has taken this metal beyond the familiar territory of snare drums and has brought it into the forefront on bass drums and toms. Copper is naturally very dark as far as metal tone goes, with a very controlled tone and boosts to the lower-to-mid frequency ranges. Each shell includes 10-ply maple reinforcement hoops that help the drums maintain a \'woody\' character (not too ringy or metallic sounding). Both of the toms include die-cast hoops that keep the drums in tune despite your loudest fills. To spice up the look of the drums, each shell features several patina stripes, while the bass hoops contain copper inlays - very classy. This shell pack includes: 9" x 13" Tom, 16" x 16" Floor Tom, 14" x 24" Bass Drum. The Q Drum Company is a boutique drum manufacturer operating out of Los Angeles. Nearly every aspect of their drums is hand-crafted, specializing in the combination of old-world techniques with new-world innovations and materials.',
			specifications: 'Copper Shells on All Drums, Dark Tonal Character, 10-Ply Maple Reinforcement Rings, Controlled Tone, Warm and Woody, Completely Hand-Crafted',
			reviews: '',
			canPurchase: true,
			soldOut: false,
			images: './images/q-copper.jpg'
		}
	];
})();
