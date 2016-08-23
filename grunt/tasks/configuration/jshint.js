
module.exports = function ( grunt ) {

    'use strict';

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'        ) ( grunt ) ;

    grunt.config.set ( 'jshint' , {

        options         : {
            jshintrc    : files.configuration.lint.javascripts
        } ,

        development     : [
            directories.development.javascripts.application + '/**/*.js'
        ] ,

        tasks           : [
            directories.development.javascripts.tasks       + '/**/*.js'
        ]

    });

    grunt.loadNpmTasks ( 'grunt-contrib-jshint' );

};
