
define ( function () {

	'use strict';

	return {

		values : {
			mode 	: 'mode' ,
			modes 	: {
				debug : 'debug'
			}
		} ,

		get     : function ( name , url ) {

			url = url || window.location;

			var regex       = ( new RegExp ( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec ( url ) || [ '' , '' ] ) [ 1 ] ,
				component   = regex.replace ( /\+/g , '%20' );

			return decodeURIComponent ( component ) || null;

		} ,

		reset   : function ( name , url ) {

			url = url || window.location;

			var revised = url.split ( '?' ) [ 0 ]                                       ,
				query   = url.indexOf ( '?' ) !== - 1 ? url.split ( '?' ) [ 1 ] : ''    ,
				anchor  = url.split ( '#' ) [ 1 ]                                       ,
				params  = []                                                            ,
				param                                                                   ,
				i                                                                       ;

			if ( query !== '' ) {

				params = query.split ( '&' );

				for ( i = params.length - 1; i >= 0; i -= 1 ) {

					param = params [ i ].split ( '=' ) [ 0 ];

					if ( param === name ) {
						params.splice ( i , 1 );
					}

				}

				if ( params.length > 0 ) {
					revised = revised + '?' + params.join ( '&' );
				}

				if ( anchor ) {
					revised = revised + '#' + anchor;
				}

			}

			return revised;

		} ,

		set     : function ( name , value , url ) {

			url = url || window.location;

			var revised     = ''                        ,
				container   = url.split ( '?' )         ,
				base        = container [ 0 ]           ,
				additional  = container [ 1 ]           ,
				string      = ''                        ,
				temporary                               ,
				anchor                                  ,
				params                                  ,
				i                                       ;

			if ( additional ) {

				temporary   = additional.split ( '#' );
				params      = temporary [ 0 ];
				anchor      = temporary [ 1 ];

				if ( anchor ) {
					additional = params;
				}

				container = additional.split ( '&' );

				for ( i = 0; i < container.length; i ++ ) {

					if ( container [ i ].split ( '=' ) [ 0 ] !== name ) {

						revised += string + container [ i ];
						string  = '&';

					}
				}

			}

			else {

				temporary   = base.split    ( '#'   );
				params      = temporary     [ 0     ];
				anchor      = temporary     [ 1     ];

				if ( params ) {
					base = params;
				}

			}

			if ( anchor ) {
				value += '#' + anchor;
			}

			return base + '?' + revised + string + name + '=' + value;

		}

	};

});
