define(['text!templates/header/page.html', '../../baseView', 'events'],
	function (HeaderTemplate, BaseView, Events) {
		'use strict';
		
		var prevSelectedpage = null;
		var self = this;
		
		var HeaderView = function() {
			// @params: el (DOM Reference), template
			BaseView.call(this, '#layoutHeader', HeaderTemplate);
		};
	
		HeaderView.prototype = new BaseView();
		
		HeaderView.prototype.doSomething = function () {
			this.addEvents();
		};
		
		HeaderView.prototype.addEvents = function () {
			$('li a[class="activeHeaderNav"]').on('click', this.handlePageNavigation);
		};
		
		HeaderView.prototype.handlePageNavigation = function (evt) {
			if ($(evt.currentTarget).hasClass('activeHeaderNav'))
				Events.dispatch( Events.PAGE_NAVIGATION_START );
		};
		
		HeaderView.prototype.setActiveNavHeader = function (page) {
			if (prevSelectedpage) {
				prevSelectedpage.removeClass( "deactiveHeaderNav" ).addClass( "activeHeaderNav" );
			}
			
			var li = $('#'+page).find('a');
			$(li).removeClass( "activeHeaderNav" ).addClass( "deactiveHeaderNav" );
			prevSelectedpage = li;
		};
	
		return HeaderView;
	}
);