{
    baseUrl             : 'development/javascripts'                              ,
    enforceDefine       : true                                              ,
    paths               : {
        backbone        : '../bower-components/backbone/backbone'           ,
        jquery          : '../bower-components/jquery/dist/jquery'          ,
        text            : '../bower-components/text/text'                   ,
        underscore      : '../bower-components/underscore/underscore'
    }                                                                       ,
     shim               : {
        underscore      : {
            deps        : []                                                ,
            exports     : '_'
        }                                                                   ,
        backbone        : {
            deps        : [
                'jquery'                                                    ,
                'underscore'
            ]                                                               ,
            exports     : 'Backbone'
        }                                                                   ,
    }                                                                       ,
    urlArgs             : 'version=' +  ( new Date() ).getTime () ,


    "appDir": "assets/javascript",
    "baseUrl": ".",
    "dir": "build/javascripts/js_output",
    "mainConfigFile": "index.js",
    "modules": [
        {
            "name": "application",
            "include": []
        }
    ],
    "namespace": "APPLICATION",
    "optimize": "none"
}
