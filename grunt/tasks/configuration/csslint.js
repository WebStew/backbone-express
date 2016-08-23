
module.exports = function ( grunt ) {

    'use strict';

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'        ) ( grunt ) ;

    grunt.config.set ( 'csslint' , {

	    options         : {
	        csslintrc   : files.configuration.lint.stylesheets 		,
	        import      : 2
	    } ,

    	development : {

            files           : [
                {
                    src     : [
                        directories.development.stylesheets.css + '/**/*.css'
                    ]
                }
            ]

        } ,

        production 	: {

            files           : [
                {
                    src     : [
                        directories.production.stylesheets.css + '/**/*.css'
                    ]
                }
            ]

        }
    });

    grunt.loadNpmTasks ( 'grunt-contrib-csslint' );

};
