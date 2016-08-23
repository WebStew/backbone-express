

module.exports = function ( grunt ) {

	'use strict';

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'        ) ( grunt ) ;

    grunt.config.set ( 'jscs' , {

        options     : {
            config  : files.configuration.format.javascripts ,
            verbose : true
        } 																			,

        development : {
            src     : directories.development.javascripts.application 	+ '/**/*.js'
        } 																			,

        tasks       : {
            src     : directories.development.javascripts.tasks 		+ '/**/*.js'
        }

    });

    grunt.loadNpmTasks ( 'grunt-jscs' );

};
