
module.exports = function ( grunt ) {

	'use strict';

	/**
	 * Properties attached at Grunt run time.
	 */
    return {
        public  : grunt.file.readJSON ( 'package.json'          ) //,
        //require : grunt.file.readJSON ( 'requirejs-config.js'   )
    };

};
