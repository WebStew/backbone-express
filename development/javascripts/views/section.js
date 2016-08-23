
define ([
	'backbone' 							,
	'handlebars' 						,
	'text!templates/section.handlebars' ,
	'views/subview'
] ,

function (
	Backbone 	,
	handlebars 	,
	template 	,
	ViewSubview
) {

	'use strict';

	return Backbone.View.extend ({

		attributes 	: {
			id 		: 'view-section'
		} ,

		tagName 	: 'section' ,

		views 		: {
			subview : new ViewSubview ()
		} ,

		initialize 	: function () {

			this.render ();

		} ,

		template 	: handlebars.compile ( template ) ,

		remove 		: function () {

			var view;

			for ( view in this.views ) {

				if ( this.views.hasOwnProperty ( view )) {
					this.views [ view ].remove ();
				}
			}

			Backbone.View.prototype.remove.apply ( this , arguments );

		} ,

		render 		: function () {

			var view;

			this.$el.prepend ( this.template );

			for ( view in this.views ) {

				if ( this.views.hasOwnProperty ( view )) {
					this.$el.append ( this.views [ view ].$el );
				}
			}
		}

	});

});
