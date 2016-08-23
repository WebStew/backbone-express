
define([
	'backbone' 								,
	'underscore' 							,
	'handlebars'							,
	'configuration/routes' 					,
	'configuration/selectors' 				,
	'utilities/radio' 						,
	'text!templates/navigation.handlebars'
],

function (
	Backbone 	,
	underscore 	,
	handlebars	,
	routes 		,
	selectors 	,
	radio		,
	template
) {

	'use strict';

	return Backbone.View.extend({

		el 			: '#view-navigation' ,

		events 		: {
			'click' : 'navigate'
		} ,

		initialize 	: function () {
			this.render ();
		} ,

		navigate 	: function ( e ) {

			var target = $ ( e.target );

			if ( target.hasClass ( selectors.router.navigate )) {

				e.preventDefault 	();
				radio.broadcast 	( radio.channels.navigate , target.attr ( 'href' ));

			}
		} ,

		template 	: handlebars.compile ( template ) ,

		render 		: function () {

			var data = underscore.extend (
					{						} ,
					{ routes 	: routes 	} ,
					{ selectors : selectors }
				);

			this.$el.append ( this.template ( data ));

		}

	});

});
