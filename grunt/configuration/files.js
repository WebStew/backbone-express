
module.exports = function () {

    'use strict';

    return {

        /**
         * Configuration filenames
         * @type {Object}
         */
        configuration   : {

            lint        : {
                javascript  : '.jshintrc'   ,
                stylesheets : '.csslintrc'
            }                               ,

            format      : {
                javascript  : '.jscsrc'
            }
        }                                   ,

        /**
         * Filenames within development
         * @type {Object}
         */
        development     : {

            javascripts : {
                feature : 'modernizr-custom'
            }                               ,

            stylesheets : {
                scss    : 'application.scss'
            }

        }                                   ,

        /**
         * Filenames within production
         * @type {Object}
         */
        production      : {

            stylesheets : {
                scss    : 'application'
            }

        }
    };

};
