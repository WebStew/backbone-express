
define ([
	'backbone' 				,
	'underscore' 			,
	'configuration/routes' 	,
	'utilities/radio'
] ,

function (
	Backbone 		,
	underscore 		,
	configuration 	,
	radio
) {

	'use strict';

	return new ( Backbone.Router.extend ({

		initialize 	: function () {

			this.listenTo 	( this , 'route' , this.change 											);
			radio.tune 		( radio.channels.navigate , underscore.bind ( this.setLocation , this 	));

		} ,

		routes 		: {
			'' 			: 'setIndex' 	,
			index 		: 'setIndex' 	,
			section 	: 'setSection' 	,
			'*NotFound' : 'setNotFound'
		} ,

		change 		: function () {

			var fragment 	= Backbone.history.getFragment () || 'index' 										,
				route 		=	configuration [ fragment ] ? configuration [ fragment ] : configuration [ 404 ] ;

			radio.broadcast ( radio.channels.location , route );

		} ,

		setLocation : function ( route ) {

			this.navigate ( route , {
				trigger : true
			});

		} ,

		setNotFound : function ( parameters ) {

			radio.broadcast ( radio.channels.views.main , '404' , parameters );

		} ,

		setIndex 	: function ( parameters ) {

			radio.broadcast ( radio.channels.views.main , 'index' , parameters );

		} ,

		setSection 	: function ( parameters ) {

			radio.broadcast ( radio.channels.views.main , 'section' , parameters );

		}

	})) ();

});
