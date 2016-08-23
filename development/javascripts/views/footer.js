
define ([
	'jquery' 							,
	'backbone' 							,
	'handlebars' 						,
	'text!templates/footer.handlebars'
] ,

function (
	$ 			,
	Backbone 	,
	handlebars 	,
	template
) {

	'use strict';

	return Backbone.View.extend ({

		el 			: '#view-footer' 					,

		events 		: {
			"keyup" : "getResults"
		} 												,

		initialize 	: function () {

			this.render ();

		} 												,

		getResults 	: function ( e ) {
			console.log ( e );
		} 												,

		template 	: handlebars.compile ( template ) 	,

		render 		: function () {

			this.$el.prepend ( this.template );
		}

	});

});
