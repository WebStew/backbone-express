
module.exports = function ( grunt ) {

    'use strict';

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt );

    grunt.config.set ( 'watch' , {

        stylesheets : {

            options : {
                spawn : false
            }                                                           ,

            files   : [
                directories.development.stylesheets.scss + '/**/*.scss'
            ]                                                           ,

            tasks   : [
                'sass:development'                                      ,
                'csslint:development'
            ]
        }

    });

    grunt.loadNpmTasks ( 'grunt-contrib-watch' );

};
