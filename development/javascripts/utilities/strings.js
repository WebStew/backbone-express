
define ( function () {

	'use strict';

	return {

		/**
		 * Set the first letter of a string to uppercase.
		 *
		 * @methodsetUCFirst
		 * @public
		 * @param       {String} string The string to manipulate.
		 * @return      {String} The string with first letter uppercased.
		 * @example
		 *      strings.setUCFirst();
		 */
		setUCFirst : function ( string ) {

			return string.charAt ( 0 ).toUpperCase () + string.slice ( 1 );

		} ,

		strip : function ( string ) {

			return string.replace( /\s/g , '' );

		}
	};

});
