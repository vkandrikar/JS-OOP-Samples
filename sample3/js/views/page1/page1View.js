define(['text!templates/page1/page.html', '../../baseView', 'css!../../../css/modules/page1.css'],
	function (Page1Template, BaseView) {
		'use strict';
	
		//var Page1Template = require('text!templates/page1/page.html'),
			//BaseView = require('../../baseView'),
			//cssUrl = require.toUrl("../../../css/modules/page1.css");
	
		var Page1View = function() {
			// @params: el (DOM Reference), template
			BaseView.call(this, '#pageCont', Page1Template);
		};
	
		Page1View.prototype = new BaseView();
	
		return Page1View;
	}
);