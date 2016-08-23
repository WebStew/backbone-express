
/**
 * An easy way for every module to bind to individual keyboard events.
 *
 * @module WILEY
 * @submodule keyboard
 */
define ([
	'jquery' 			,
	'utilities/radio' 	,
	'utilities/dom'
] ,

function (
	$ 		,
	radio 	,
	dom
) {

	'use strict';

	return {

		/**
		 * Publishers the keydown event with a friendly description.
		 *
		 * @method setEvent
		 * @param {Object} e The keydown event
		 */
		set 	: function ( e ) {

			var channel = radio.channels.keyboard [ e.which ];

			if ( channel ) {

				radio.broadcast ( channel );

			}

		} ,

		/**
		 * Sets up the keyboard module to publish reader friendly events.
		 *
		 * @method setup
		 * @public
		 * @example
		 *      keyboard.setup();
		 */
		setup 	: function () {

			dom.get ( document ).on ( 'keydown' , this.set );

		}

	};

});
