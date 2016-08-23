
define ([
	'backbone' 	,
	'underscore'
] ,

function (
	Backbone 	,
	underscore
) {

	'use strict';

	return underscore.extend ({

		// Facade the Backbone trigger method
		broadcast 	: function () {

			this.trigger.apply ( this , arguments );

		} ,

		// Facade the Brackbone on method
		tune 		: function () {

			this.on.apply ( this , arguments );

		} ,

		// Transparency for all the events we use
		channels 	: {

			// Friendly screensize channels
			devices : {

				on 	: ':on' 					,
				off : ':off' 					,

				xxs : 'device:mobile:portrait' 	,
				xs 	: 'device:mobile:landscape' ,
				s 	: 'device:mobile:phablet' 	,
				m 	: 'device:tablet:portrait' 	,
				ml 	: 'device:tablet:landscape' ,
				l 	: 'device:desktop:small' 	,
				xl 	: 'device:desktop:medium' 	,
				xxl : 'device:desktop:large'

			} 									,

			// Friendly keydown channels
			keyboard : {
				9 		: 'keyboard:tab' 		,
				13 		: 'keyboard:enter' 		,
				27 		: 'keyboard:escape' 	,
				32 		: 'keyboard:spacebar' 	,
				37 		: 'keyboard:left' 		,
				38 		: 'keyboard:up' 		,
				39 		: 'keyboard:right' 		,
				40 		: 'keyboard:down'
			} 									,

			location : 'location' 				,

			// Lets the router know that a change in navigation is required
			navigate 	: 'router:navigate' 	,

			// Lets views know which ones should be rendered
			views 		: {
				main 	: 'views:main'
			}

		}

	} , Backbone.Events );

});
