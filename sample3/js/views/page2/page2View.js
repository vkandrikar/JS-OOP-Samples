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
		
		/*
			YOU HAVE TO WRITE ALL PROTOTYPE HERE ONLY
			OTHERWISE IT WILL OVERRIDED BY BASECLASS
		*/
		Page2View.prototype.doSomething = function () {
			console.log("*** this is page view 2 doSomething ***");
		};
		
		Page2View.prototype.cleanView = function () {
			console.log("*** this is page view 2 cleanView ***");
		};
	
		return Page2View;
	}
);