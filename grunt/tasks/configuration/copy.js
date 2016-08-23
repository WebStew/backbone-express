
module.exports = function ( grunt ) {

    'use strict';

    var directories = require ( '../../../grunt/configuration/directories' ) ( grunt );
        //files       = require ( '../../../grunt/configuration/files'       ) ( grunt ) ;

    grunt.config.set ( 'copy' , {
        images      : {
            files   :  [
                {
                    dest    : directories.production.images.presentation    ,
                    expand  : true                                          ,
                    filter  : 'isFile'                                      ,
                    flatten : true                                          ,
                    src     : [
                        directories.development.images.presentation + '/*'
                    ]
                }
            ]
        }                                                                   ,
        // javascripts : {
        //     files   : [
        //         {
        //             dest    : directories.public.javascripts.components     ,
        //             expand  : true                                          ,
        //             filter  : 'isFile'                                      ,
        //             flatten : true                                          ,
        //             src     : [
        //                 javascripts
        //             ]
        //         }                                                           ,
        //         {
        //             dest    : directories.public.javascripts.vendor         ,
        //             expand  : true                                          ,
        //             filter  : 'isFile'                                      ,
        //             flatten : true                                          ,
        //             src     : [
        //                 directories.development.javascripts.loader + '/' + files.javascripts.loader
        //             ]
        //         }
        //     ]
        // }                                                                   ,
        // styleguide  : {
        //     files   : [
        //         {
        //             cwd     : directories.public.stylesheets                ,
        //             dest    : directories.public.documentation.stylesheets  ,
        //             expand  : true                                          ,
        //             src     : [
        //                 '**/*'
        //             ]
        //         }                                                           ,
        //         {
        //             cwd     : directories.development.styleguide            ,
        //             dest    : directories.public.documentation.styleguide   ,
        //             expand  : true                                          ,
        //             filter  : 'isFile'                                      ,
        //             flatten : true                                          ,

        //             rename  : function ( destination , source ) {

        //                 return destination + '/' + source.replace ( files.stylesheets.styleguide , 'index.html' );

        //             }                                                       ,

        //             src     : [
        //                 files.stylesheets.styleguide
        //             ]
        //         }                                                           ,
        //         {
        //             cwd     : directories.public.name                       ,
        //             dest    : directories.public.documentation.styleguide   ,
        //             expand  : true                                          ,
        //             src     : [
        //                 'javascripts/**/*'
        //             ]
        //         }
        //     ]
        // }
    });

    grunt.loadNpmTasks ( 'grunt-contrib-copy' );

};
