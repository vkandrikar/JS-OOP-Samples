define(["routie"], 
	function () {
		'use strict';
		
		routie({
			'': function () {
				require(['views/page1/page1View'], function (Page1View) {
					var page1View = new Page1View();
					page1View.initialize();
				});
			},
			
			'page1': function () {
				require(['views/page1/page1View'], function (Page1View) {
					var page1View = new Page1View();
					page1View.initialize();
				});
			},
			
			'page2': function () {
				require(['views/page2/page2View'], function (Page2View) {
					var page2View = new Page2View();
					page2View.initialize();
				});
			}
		});		
	}
);