
module.exports = function ( grunt ) {

	'use strict';

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'        ) ( grunt ) ;

    grunt.config.set ( 'sass' , {

        development : {

            options : {
                precision   : 3                                     	,
                sourcemap   : 'none'                                	,
                style       : 'expanded'
            } 															,

            files   : [
                {
                    cwd     : directories.development.stylesheets.scss 	,
                    dest    : directories.development.stylesheets.css 	,
                    expand  : true                                  	,
                    ext     : '.css'                                	,
                    src     : [
                        files.development.stylesheets.scss
                    ]
                }
            ]

        } ,

        production : {

            options : {
                precision   : 3                                     	,
                sourcemap   : 'none'                                	,
                style       : 'compressed'
            } 															,

            files   : [
                {
                    cwd     : directories.development.stylesheets.scss 	,
                    dest    : directories.production.stylesheets.css 	,
                    expand  : true                                  	,
                    ext     : '.css'                                	,
                    src     : [
                        files.development.stylesheets.scss
                    ]
                }
            ]

        }
    });

    grunt.loadNpmTasks ( 'grunt-contrib-sass' );

};
