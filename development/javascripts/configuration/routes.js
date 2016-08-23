
define ( function () {

	'use strict';

	return {

		index 	: {
			navigation 	: {
				primary : true
			} 							,
			title 		: 'Home' 		,
			url 		: '/index'

		} 								,

		section : {
			navigation 	: {
				primary : true
			} 							,
			title 	: 'Section' 		,
			url 	: '/section'
		} 								,

		'404' 	: {
			navigation 	: {
				primary : false
			} 							,
			title 	: 'Page not found' 	,
			url 	: '/404'
		}

	};

});
