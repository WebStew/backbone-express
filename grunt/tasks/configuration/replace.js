
// 'use strict';

// module.exports = function ( grunt ) {

//     var directories = require ( '../../../grunt/configuration/directories' ) ( grunt );

//     grunt.config.set ( 'replace' , {
//         styleguide  : {
//             overwrite       : true                                                                      ,
//             replacements    : [
//                 {
//                     from    : '/components/styleguides/HTML5/stylesheets/css'                           ,
//                     to      : 'stylesheets'
//                 }                                                                                       ,
//                 {
//                     from    : '/node_modules/grunt-modernizr/lib/build-files/modernizr-latest.js'       ,
//                     to      : 'javascripts/vendor/modernizr.js'
//                 }                                                                                       ,
//                 {
//                     from    : '/components/styleguides/HTML5/node_modules/requirejs/require.js'         ,
//                     to      : 'javascripts/vendor/require.js'
//                 }                                                                                       ,
//                 {
//                     from    : 'data-main="/components/styleguides/HTML5/javascripts/wiley-application"' ,
//                     to      : 'data-main="javascripts/wiley-application"'
//                 }
//             ]                                                                                           ,
//             src             : [
//                 directories.public.documentation.styleguide + '/*.html'
//             ]
//         }
//     });

//     grunt.loadNpmTasks ( 'grunt-text-replace' );

// };
