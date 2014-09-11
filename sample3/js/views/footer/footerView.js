define(
	function (require) {
		'use strict';
	
		var Page1Template = require('text!templates/footer/page.html'),
			BaseView = require('../../baseView');
	
		var Page1View = function() {
			// @params: el (DOM Reference), template
			BaseView.call(this, '#layoutFooter', Page1Template);
		};
	
		Page1View.prototype = new BaseView();
	
		return Page1View;
	}
);