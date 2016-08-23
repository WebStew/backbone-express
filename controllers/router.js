
'use strict';

var express 	= require ( 'express' 			) ,
	parser 		= require ( 'body-parser' 		) ,
	override 	= require ( 'method-override' 	) ,
	router 		= express.Router () 			;

// Configure the body parser for POST request
router.use ( parser.urlencoded ({
	extended : true
}));

// Configure method override for PUT and DELETE requests
router.use ( override ( function ( request , response ) {

	var method;

	if ( request.body && typeof request.body === 'object' && '_method' in request.body ) {

		// Look in urlencoded POST bodies and delete it
		method = request.body._method;
		delete request.body._method;

		return method;

	}

}));

//router.get ( '/api/*' , parser , function ( request , response ) {});
router.get ( '*' , function ( request , response ) {
	response.render ( 'index' );

});

module.exports = router;
