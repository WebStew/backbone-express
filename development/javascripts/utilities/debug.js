
define ([
	'configuration/application' ,
	'configuration/routes' 		,
	'configuration/selectors' 	,
	'utilities/devices' 		,
	'utilities/dom' 			,
	'utilities/keyboard' 		,
	'utilities/log' 			,
	'utilities/parameters' 		,
	'utilities/radio'

] ,

function (
	configuration 	,
	routes 			,
	selectors 		,
	devices 		,
	dom 			,
	keyboard 		,
	log 			,
	parameters 		,
	radio
) {

	'use strict';

	return {

		setup 	: function ( application ) {

			if ( parameters.get ( parameters.values.mode ) === parameters.values.modes.debug ) {

				window [ configuration.name ] = {
					debug 		: true 						,
					name 		: configuration.name 		,
					version 	: configuration.version 	,
					devices 	: devices					,
					dom 		: dom 						,
					keyboard 	: keyboard 					,
					parameters 	: parameters 				,
					radio 		: radio 					,
					routes 		: routes 					,
					selectors 	: selectors 				,
					view 		: application
				};

				log.set ( 'MODE : Debug' , window [ configuration.name ] , 'warning' );

				radio.tune ( 'all' , this.logEvents );

			}
		} ,

		logEvents 	: function () {

			var event;

			event = Array.prototype.shift.apply ( arguments );

			log.set ( 'RADIO : Dispatched Event' , {
				name : event 	,
				data : arguments
			});

		}
	};

});
