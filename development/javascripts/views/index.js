
define ([
	'jquery' 						,
	'backbone' 						,
	'handlebars'					,
	'text!templates/index.handlebars'
] ,

function (
	$ 			,
	Backbone 	,
	handlebars 	,
	template
) {

	'use strict';

	return Backbone.View.extend ({

		attributes 	: {
			id 		: 'view-index'
		} 												,

		tagName 	: 'section' 						,

		initialize 	: function () {

			this.render ();

		} 												,

		template 	: handlebars.compile ( template ) 	,

		render 		: function () {

			this.$el.prepend ( this.template );

		}

	});

});
