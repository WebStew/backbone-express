
// 'use strict';

// module.exports = function ( grunt ) {

//     var directories     = require ( '../../../grunt/configuration/directories'  ) ( grunt )         ,
//         files           = require ( '../../../grunt/configuration/files'        ) ( grunt )         ,
//         configuration   = {
//             options     : {
//                 report  : 'min'
//             }                                                                                       ,
//             public      : {
//                 files   : {}
//             }
//         }                                                                                           ,
//         javascripts     = {
//             feature     : directories.public.javascripts.vendor + '/' + files.javascripts.feature   ,
//             loader      : directories.public.javascripts.vendor + '/' + files.javascripts.loader    ,
//             public      : directories.public.javascripts.components + '/' + files.javascripts.public
//         };

//     // Configured this way so that we can dynamically create the configuration object
//     // Compress JavaScript
//     configuration.public.files [ javascripts.feature ]  = javascripts.feature;
//     configuration.public.files [ javascripts.loader ]   = javascripts.loader;
//     configuration.public.files [ javascripts.public ]   = javascripts.public;

//     grunt.config.set    ( 'uglify' , configuration  );
//     grunt.loadNpmTasks  ( 'grunt-contrib-uglify'    );

// };
