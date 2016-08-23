
module.exports = function ( grunt ) {

	'use strict';

	var directories = require ( '../../../grunt/configuration/directories' ) ( grunt ) ,
		files       = require ( '../../../grunt/configuration/files'       ) ( grunt ) ,
		modernizr 	= directories.development.javascripts.feature + '/' + files.development.javascripts.feature + '.js';

	grunt.config.set ( 'modernizr' , {
		development 			: {
			dest                : modernizr 	,
			extensibility       : {
				addtest         : false 		,
				cssclassprefix  : '' 			,
				domprefixes     : false 		,
				hasevents       : false 		,
				prefixed        : false 		,
				prefixes        : false 		,
				testallprops    : false 		,
				testprops       : false 		,
				teststyles      : false

			} 									,
			extra               : {
				cssclasses      : true 			,
				load            : true 			,
				mq              : false 		,
				printshiv       : false 		,
				shiv            : true
			} 									,
			matchCommunityTests : false 		,
			options             : [
				'setClasses'
			] 									,
			parseFiles          : true 			,
			tests               : [
				'cssanimations'					,
				'cssgradients'					,
				'csstransforms'					,
				'mq'							,
				'opacity'						,
				'svg'							,
				'touch'
			] 									,

			// We uglify in a central uglify task for all JavaScript files
			uglify              : false
		}
	});

	grunt.loadNpmTasks ( 'grunt-modernizr' );

};
