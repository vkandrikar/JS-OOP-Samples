define(['text!templates/footer/page.html', '../../baseView'],
	function (FooterTemplate, BaseView) {
		'use strict';
	
		var FooterView = function() {
			// @params: el (DOM Reference), template
			BaseView.call(this, '#layoutFooter', FooterTemplate);
		};
	
		FooterView.prototype = new BaseView();
	
		return FooterView;
	}
);