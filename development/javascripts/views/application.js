
define ([
	'jquery' 					,
	'backbone' 					,
	'controllers/router' 		,
	'utilities/devices' 		,
	'utilities/debug' 			,
	'utilities/keyboard' 		,
	'views/footer'				,
	'views/navigation' 			,
	'views/main' 				,
	'views/title'
] ,

function (
	$ 							,
	Backbone 					,
	router 						,
	devices 					,
	debug 						,
	keyboard 					,
	ViewFooter					,
	ViewNavigation 				,
	ViewMain 					,
	ViewTitle

) {

	'use strict';

	return new ( Backbone.View.extend ({

		el 			: 'body' ,

		views 		: {
			footer 		: new ViewFooter 		() ,
			main 		: new ViewMain 			() ,
			navigation 	: new ViewNavigation 	() ,
			title 		: new ViewTitle 		()
		} ,

		initialize 	: function () {

			debug.setup 	( this );
			keyboard.setup 	();

			$.ajaxSetup ({
				cache : false
			});

			this.router = router;

			Backbone.history.start ({
				pushState : true
			});

			devices.setup ();

		}

	})) ();

});

