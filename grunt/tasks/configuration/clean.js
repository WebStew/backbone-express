
module.exports = function ( grunt ) {

    'use strict';

    var directories = require ( '../../../grunt/configuration/directories' ) ( grunt );

    grunt.config.set ( 'clean' , {
        options     : {
            force   : true
        } ,
        production  : {
            src     : [
                directories.production.name
            ]
        }
    });

    grunt.loadNpmTasks ( 'grunt-contrib-clean' );

};
