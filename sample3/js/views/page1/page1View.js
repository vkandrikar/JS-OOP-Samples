define(['text!templates/page1/page.html', '../../baseView', 'css!../../../css/modules/page1.css'],
	function (Page1Template, BaseView) {
		'use strict';
	
		//var Page1Template = require('text!templates/page1/page.html'),
			//BaseView = require('../../baseView'),
			//cssUrl = require.toUrl("../../../css/modules/page1.css");
	
		var Page1View = function () {
			// @params: el (DOM Reference), template
			BaseView.call(this, '#pageCont', Page1Template);
			
			this.count = 0;
			this.testInterval;
			
			this.doSomething = function () {
				var self = this;						
										
				this.testInterval = setInterval ( function () {
					console.log(self.count++);	
				}, 1000);
				
				this.addEvents();
			};
			
			this.addEvents = function () {
				$(".btn1").on("click", this.btn1Handler);
				$(".btn2").on("dblclick", this.btn2Handler);
				$(".btn3").on("mouseenter", this.btn3Handler);
			};
			
			this.removeEvents = function () {
				$(".btn1").off("click", this.btn1Handler);
				$(".btn2").off("dblclick", this.btn2Handler);
				$(".btn3").off("mouseenter", this.btn3Handler);
			};
			
			this.btn1Handler = function (evt) {
				alert("btn1 handler");
				console.log($(evt.currentTarget));
			};
			
			this.btn2Handler = function (evt) {
				alert("btn2 handler");
			};
			
			this.btn3Handler = function (evt) {
				alert("btn3 handler");
			};
			
			this.resetView = function () {				
				this.count = 0;				
			}; //end of funt
			
			this.cleanView = function () {				
				//clean your view here
				clearInterval(this.testInterval);
				this.resetView();
				this.removeEvents();				
			}; //end of funt
		};
		
		Page1View.prototype = new BaseView();		
	
		return Page1View;
	}
);