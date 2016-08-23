
define ([
	'backbone'			,
	'underscore' 		,
	'mixins/loader' 	,
	'utilities/radio' 	,
	'views/index' 		,
	'views/section' 	,
	'views/404'
] ,

function (
	Backbone 		,
	underscore 		,
	loader 			,
	radio 			,
	ViewIndex 		,
	ViewSection 	,
	ViewNotFound
) {

	'use strict';

	return Backbone.View.extend ({

		el 			: '#view-main' ,

		elements 	: {
			body 	: '.view__body'
		} ,

		initialize 	: function () {

			this.setElements ();

			// Attached Mixins
			underscore.extend ( this , loader );

			// Attached events
			radio.tune ( radio.channels.views.main , underscore.bind ( this.render , this ));

		} ,

		views 		: {
			active 	: null 			,
			index 	: ViewIndex 	,
			section : ViewSection 	,
			404 	: ViewNotFound
		} ,

		render 		: function ( route ) {

			if ( this.views.active ) {
				this.views.active.remove ();
			}

			this.views.active = new this.views [ route ] ();
			this.$body.prepend ( this.views.active.el );

			this.loaded ();

		} ,

		setElements : function () {

			var element;

			for ( element in this.elements ) {

				if ( this.elements.hasOwnProperty ( element )) {
					this [ '$' + element ] = this.$el.find ( this.elements [ element ]);
				}
			}
		}

	});
});
