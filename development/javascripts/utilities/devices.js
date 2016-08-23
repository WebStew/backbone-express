
/**
 * Publishers view state changes when a browser enters and exits the different media query viewports.
 * Set ups an object literal containing the different view states according to _vars.scss.
 *
 * @module WILEY
 * @submodule state
 */
define ([
	'underscore' 		,
	'utilities/radio' 	,
	'utilities/strings'
] ,

function (
	underscore 	,
	radio 		,
	strings
) {

	'use strict';

	return {

		/**
		 * An object literal containing the different view states.
		 * If you change these values, also change in _vars.scss.
		 *
		 * @property devices
		 * @type {Object}
		 */
		devices 	: {

			xxs 	: {
				min : 0 	,
				max : 320
			} 				,

			xs 	: {
				min : 321 	,
				max : 480
			} 				,

			s 	: {
				min : 481 	,
				max : 767
			} 				,

			m 	: {
				min : 768 	,
				max : 1000
			} 				,

			ml 	: {
				min : 1001 	,
				max : 1024
			} 				,

			l 	: {
				min : 1025 	,
				max : 1280
			} 				,

			xl 	: {
				min : 1281 	,
				max : 1600
			} 				,

			xxl 	: {
				min : 1601 	,
				max : 4800
			}
		} ,

		getDevice 	: function ( query ) {

			var device 		= null 	,
				property 			;

			for ( property in this.devices ) {

				if (
					this.devices.hasOwnProperty ( property ) &&
					strings.strip ( this.devices [ property ].query ) === strings.strip ( query )
				) {

					device = property;
					break;

				}

			}

			return device;

		} ,

		getQuery 	: function ( min , max ) {

			var media = 'screen and (min-width:' + min + 'px)';

			return max ? media + ' and (max-width:' + max + 'px)' : media;

		} ,

		/**
		 * Publishe an event to the matching media query.
		 *
		 * @method setState
		 * @private
		 * @param {Objecty} query The match media object.
		 */
		setDevice 	: function ( query ) {

			var channel ,
				device 	;

			if ( query.matches ) {

				device 	= this.getDevice ( query.media );
				channel = radio.channels.devices;

				// Broadcast the unmatched device
				if ( this.device ) {
					radio.broadcast ( radio.channels.devices [ this.device.name ] + channel.off );
				}

				// Broadcast matched device
				radio.broadcast ( radio.channels.devices [ device ] + channel.on );

				// Reference to the current device
				this.device = underscore.extend ( this.devices [ device ] , {
					name : device
				});

			}

		} ,

		/**
		 * Loops through the media states and attaches an event to the matching and unmatching.
		 *
		 * @method set
		 * @public
		 */
		setEvents 	: function () {

			var device 		,
				property 	,
				query 		;

			for ( property in this.devices ) {

				if ( this.devices.hasOwnProperty ( property )) {

					device 			= this.devices 	[ property 					];
					device.query 	= this.getQuery ( device.min , device.max 	);
					query 			= this.media 	( device.query 				);

					query.addListener 	( underscore.bind ( this.setDevice , this 	));
					this.setDevice 		( query 									);

				}
			}
		} ,

		media 		: underscore.bind ( window.matchMedia , window ) ,

		/**
		 * Starts the state module.
		 *
		 * @method setup
		 * @public
		 * @example
		 *      state.setup();
		 */
		setup 		: function () {

			if ( this.media && this.media ( 'all' ).addListener ) {

				this.setEvents ();

			}

			else {

				throw ( 'Match Media is not supported in this Browser - Please add a Polyfill' );

			}

		}

	};

});
