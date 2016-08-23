
/**
 * This module is a cache of all our common jQuery objects. eg body, document and window.
 * This avoids querying the DOM multiple times across multiple AMD modules.
 *
 * @module WILEY
 * @submodule dom
 */
define ([
	'jquery'
] ,

function ( $ ) {

	'use strict';

	return {

		/**
		 * Object cache of all global jQuery objects.
		 * @type {Object}
		 */
		cache : {} ,

		/**
		 * Returns a cached jQuery object. Sets the object into cached if not already defined.
		 * @param  {String} selector The selector of the element.
		 * @return {Object}          The jQuery object of the element.
		 */
		get : function ( selector ) {

			if ( ! this.cache [ selector ]) {

				this.cache [ selector ] = $ ( selector );

			}

			return this.cache [ selector ];

		}

	};

});
