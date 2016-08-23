
define ( function () {

	'use strict';

	return {

		loaded 	: function () {

			this.$el.find 			( '.loader__status' ).remove ();
			this.$el.removeClass 	( 'loader--loading' );

		} ,

		loading : function () {

		}

	};

});
