define ([], 
	function () {
		'use strict';
		
		var Events = function Event() {
			this.PAGE_CHANGED = "pageChanged";
			this.VIEW_CREATED = "videCreated";
			this.PAGE_NAVIGATION_START = "pageNavigationStart";
		}
	 
		Events.prototype.addListener = function( type, callback ) {
			$( 'body' ).bind( type , callback );
		}
	 
		Events.prototype.dispatch = function( type, data ) {
			$( 'body' ).trigger( type, data );
		}
	 
		return (new Events);
	}
);