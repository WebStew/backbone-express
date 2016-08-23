
module.exports = function ( grunt ) {

    'use strict';

    // Build your application
    grunt.registerTask ( 'build:development' , function () {

        grunt.task.run (
            [
                //'clean:production'      ,
                //'copy:images'           ,
                'jshint:tasks'          ,
                'jshint:development'    ,
                'jscs:tasks'            ,
                'jscs:development'      ,
                // 'yuidoc:development'    ,
                'sass:development'      ,
                //'sass:production'       ,
                'csslint:development'   ,
                //'csslint:production'    ,
                // 'requirejs:development' ,
                // 'copy:javascripts'      ,
                'modernizr:development'
                // 'clean:release'         ,
                // 'uglify:public'         ,
                // 'copy:styleguide'       ,
                // 'replace:styleguide'
            ]
        );

    });

};
