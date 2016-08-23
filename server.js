
( function () {

	'use strict';

	var compression		= require ( 'compression'					) ,
		express 		= require ( 'express' 						) ,
		favicon 		= require ( 'serve-favicon' 				) ,
		morgan 			= require ( 'morgan' 						) ,
		path 			= require ( 'path' 							) ,
		handlebars 		= require ( 'express-handlebars' 			) ,
		configuration 	= require ( './configuration/environment' 	) ,
		//database 		= require ( './configuration/database' 		) ,
		log 			= require ( './utilities/log' 				) ,
		router 			= require ( './controllers/router' 			) ,
		application 	= express ()								;

	// Customise the view engine
	application.engine 	( 'handlebars', handlebars ({
		defaultLayout 	: 'master' ,
		partialsDir 	: [
			'views/global'
		]
	}));
	application.set 	( 'views' , path.join( __dirname , 'views' ));
	application.set 	( 'view engine' , 'handlebars' 				);

	// Register the middleware
	application.use ( compression 	());
	application.use ( favicon 		( __dirname + '/development/images/presentation/ico/favicon.ico' 	));
	application.use ( morgan 		( 'combined' 														));

	// Mount the router
	application.use ( express.static ( path.join( __dirname , '/development' 	)));
	application.use ( '/' , router 												);

	// Start the application
	application.listen ( configuration.port , function () {

		log.set ( 'ENVIRONMENT 	: ' , configuration.environment );
		log.set ( 'PORT 		: ' , configuration.port 		);

	});

} ());
