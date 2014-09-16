define(['../baseView', 'events'],
	function (BaseView, Events) {
		'use strict';
		
		var LoaderView = function() {
			// @params: el (DOM Reference), template
			BaseView.call(this, '#backdrop', '<img class="loaderImg" src="images/loader.gif">');
			
			var self = this;
			
			Events.addListener( Events.VIEW_CREATED, function () { self.hideMe() } );
			Events.addListener( Events.PAGE_NAVIGATION_START, function () { self.showMe() } );
			
			/*
				WE CAN ALSO USE PROTOTYPE HERE ALSO TO DECLARE THE METHODS
			*/
			
			this.showMe = function () {
				$(this.el).show();
			};
			
			this.hideMe = function () {
				$(this.el).hide();
			};
		};
	
		LoaderView.prototype = new BaseView();
					
		return LoaderView;
	}
);