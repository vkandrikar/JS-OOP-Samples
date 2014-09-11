define(
	function (require) {
		'use strict';
	
		var appTemplate = require('text!templates/layout.html'),
			BaseView = require('../baseView');
	
		var AppView = function() {
			// @params: el (DOM Reference), template
			BaseView.call(this, '#appCont', appTemplate);
			
			require(['views/header/headerView'], function (HeaderView) {
				var headerView = new HeaderView();
				headerView.initialize();
			});
			
			require(['views/footer/footerView'], function (FooterView) {
				var footerView = new FooterView();
				footerView.initialize();
			});
		};
	
		AppView.prototype = new BaseView();
	
		return AppView;
	}
);// JavaScript Document