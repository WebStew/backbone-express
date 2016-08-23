
define ( function () {

	'use strict';

	requirejs.config ({
		baseUrl 			: '/javascripts'                         			,
		enforceDefine 		: true 												,
		paths 				: {
		    backbone 		: '../bower-components/backbone/backbone' 			,
			handlebars 		: '../bower-components/handlebars/handlebars'		,
		    jquery 			: '../bower-components/jquery/dist/jquery' 			,
		    text  			: '../bower-components/text/text' 					,
		    underscore 		: '../bower-components/underscore/underscore'
		} 																		,
		 shim 				: {
	        underscore 		: {
	            deps 		: [] 												,
	            exports 	: '_'
	        } 																	,
			handlebars 		: {
				exports 		: 'Handlebars'
			}																	,
	        backbone 		: {
	            deps 		: [
	            	'jquery' 													,
	            	'underscore'
	            ] 																,
	            exports 	: 'Backbone'
	        } 																	,
	    } 																		,
		urlArgs 			: 'version=' +  ( new Date() ).getTime ()
	});

	requirejs ([ 'views/application' ]);

});
