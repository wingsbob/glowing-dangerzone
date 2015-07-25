(function () {
	'use strict';

	var cover = require('browserify-istanbul');

	module.exports = function (grunt) {

		var config = {
			karma: {
				unit: {
					configFile: 'karma.conf.js',
					singleRun: true,
					browsers: ['PhantomJS'],
					browserify: {
						debug: false,
        				plugin: ['proxyquire-universal'],
        				configure: function (bundle) {
        					bundle.on('prebundle', function () {
        						bundle.transform(cover);
        					});
        				}
					}
				}
			}
		};

		grunt.initConfig(config);

		grunt.loadNpmTasks('grunt-karma');

		grunt.registerTask('default', ['karma']);
	};

}());