define(['text!templates/page2/page.html', '../../baseView', 'css!../../../css/modules/page2.css'],
	function (Page2Template, BaseView) {
		'use strict';
	
		//var Page1Template = require('text!templates/page1/page.html'),
			//BaseView = require('../../baseView'),
			//cssUrl = require.toUrl("../../../css/modules/page1.css");
	
		var Page2View = function() {
			// @params: el (DOM Reference), template
			BaseView.call(this, '#pageCont', Page2Template);
		};
	
		Page2View.prototype = new BaseView();
	
		return Page2View;
	}
);