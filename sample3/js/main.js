// JavaScript Document
requirejs.config({
	/* The path where your JavaScripts files are located. */
    baseUrl: 'js/', //main.js & other folders in same location
	
	// to add module level css & we need to map css extension
	map: {
        '*': {
            'css': 'vendors/require/plugins/require-css/css'
        }
    },
	
	paths: {
		/* List of libraries to be included in this architecture. */
		'jquery': 'vendors/jquery/jquery2.1.1.min',
		'handlebars': 'vendors/handlebars/handlebars',
		
		/* List of [architecture based custom JavaScript] files to be loaded in this architecture. */
        'templates': '../templates',
		
		/* List of libs */
		'routie': 'libs/routie',
		
		/* List of Require.js plugins: */
        'text': 'vendors/require/plugins/text',	
		
		/* custom */
		'events': 'events',
		'globals': 'globals'
	},
	
	shim: {
		handlebars: {
            exports: 'Handlebars'
        }
	}
});

// Start the main app logic.
require(['views/application', 'router'],
	function(ApplicationView, Router) {	
		var AppView = new ApplicationView();
		AppView.initialize();    	
		
		//Events.once('onHeaderViewLoaded', function () {
			//Router.initialize({applicationView: applicationView});
		//});	
	}
);