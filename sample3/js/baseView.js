define(['jquery', 'events'], 
	function ($, Events) {
		'use strict';
		
		var prevView;
		
		var BaseView = function (el, template) {
			this.el = el || 'body';
	
			this.template = template;
		};
	
		BaseView.prototype.initialize = function () {
			console.log("LOG: Initialize Baseview");
	
			this.render();
		};
	
		BaseView.prototype.render = function () {
			console.log("LOG: Executed Baseview Render");
	
			if (this.template && this.el) {
				if (prevView && typeof prevView.cleanView === "function") {
					prevView.cleanView();
				}
				
				$(this.el).html(this.template);
								
				if (typeof this.doSomething === "function" )
					this.doSomething();
			}
			
			Events.dispatch( Events.VIEW_CREATED );
			prevView = this;
		};
					
		return BaseView;
	}
);