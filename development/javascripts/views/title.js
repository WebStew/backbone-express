
define ([
	'backbone' 					,
	'underscore' 				,
	'configuration/application' ,
	'utilities/radio'
] ,

function (
	Backbone 		,
	underscore 		,
	application 	,
	radio
) {

	'use strict';

	return Backbone.View.extend ({

		el 			: '#view-title' ,

		initialize 	: function () {

			// Attached events
			radio.tune ( radio.channels.location , underscore.bind ( this.render , this ));

		} ,

		render 		: function ( location ) {

			this.$el.text ( location.title + ' | ' + application.name );

		}

	});

});
