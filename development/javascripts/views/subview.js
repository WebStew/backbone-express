
define ([
	'jquery' 							,
	'backbone' 							,
	'handlebars'						,
	'text!templates/subview.handlebars'
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
			id 		: 'view-subview'
		} 												,

		tagName 	: 'section' 						,

		initialize 	: function () {

			this.render ();

		}												,

		template 	: handlebars.compile ( template ) 	,

		render 		: function () {

			this.$el.prepend ( this.template );


		}

	});

});
