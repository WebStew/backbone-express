
module.exports = function () {

	'use strict';

    return {

    	/**
    	 * Tree structure for development environment
    	 * @type {Object}
    	 */
        development : {

        	images 		: {
        		presentation 	: 'development/images/presentation'
        	 } 														,

        	javascripts : {
        		application 	: 'development/javascripts' 		,
                feature         : 'development/vendor/modernizr'    ,
        		tasks 			: 'grunt'
        	} 														,

        	stylesheets : {
        		css 			: 'development/stylesheets/css' 	,
        		scss 			: 'development/stylesheets/scss'
        	}
        } 															,

        /**
         * Tree structure for production environment
         * @type {Object}
         */
        production 	: {

        	name 		: 'production' 								,

        	images 		: {
        		presentation 	: 'production/images/presentation'
        	} 														,

        	stylesheets : {
        		css 			: 'production/stylesheets'
        	}

        }

    };

};
