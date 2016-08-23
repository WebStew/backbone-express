
define ( function () {

	'use strict';

	return {

		set : function ( title , data , type ) {

			var color 	= type === 'warning' ? 'red' : 'blue' 	,
				css 	= [
					'color 			: ' + color + ';' 			,
					'font-weight 	: 700;' 					,
					'font-family 	: verdana'
				] 												,
				style = css.join ( '' ).replace ( /\s/g , '' ) 	;

			if ( console ) {
				console.group 		( '%c' + title + '' , style );
				console.dir 		( data );
				console.groupEnd 	();
			}

		}

	};
});
