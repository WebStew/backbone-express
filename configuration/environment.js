
'use strict';

module.exports = {

	name 		: 'APPLICATION' 								,

	version 	: '0.0.1'										,

	environment : process.env.ENVIRONMENT 	|| 'development' 	,

	port 		: process.env.PORT 			|| 3000

};
