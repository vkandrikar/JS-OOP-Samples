define(['text!templates/layout.html', '../baseView', '../events'],
	function (appTemplate, BaseView, Events) {
		'use strict';
		
		var AppView = function() {
			// @params: el (DOM Reference), template
			BaseView.call(this, '#appCont', appTemplate);
			
			var self = this;
			
			Events.addListener(Events.PAGE_CHANGED, function (evt, obj) {self.pageChanged(evt, obj)} );
			
			require(['views/header/headerView'], function (HeaderView) {
				self.headerView = new HeaderView();
				self.headerView.initialize();
			});
			
			require(['views/footer/footerView'], function (FooterView) {
				var footerView = new FooterView();
				footerView.initialize();
			});
			
			require(['views/loader'], function (LoaderView) {
				var loader = new LoaderView();
				loader.initialize();
			});
			
			this.pageChanged = function (evt, obj) {
				this.headerView.setActiveNavHeader(obj.page)
			};
		};
	
		AppView.prototype = new BaseView();		
	
		return AppView;
	}
);// JavaScript Document