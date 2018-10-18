// node-js-npm-template/Gruntfile.js

'use strict';

module.exports = grunt => {
	const packageJsonFilename = 'package.json';
	const gruntfile = grunt.file.readJSON(packageJsonFilename);

	grunt.initConfig({
		pkg: gruntfile,
		eslint: {
			target: [
				'*.js',
				'src/*.js',
				'test/**/*.js'
			]
		},
		/*
		jasmine: {
			// pivotal: {
			src: 'src/ ** /*.js', // TODO: Delete the spaces in this string.
			options: {
				// specs: 'spec/*Spec.js',
				specs: 'test/jasmine/*_jasmine.js'
				// helpers: 'spec/*Helper.js'
			}
			// }
		},
		karma: {
			unit: {
				options: {
					files: [
						'test/karma/*_karma.js'
					]
				},
				configFile: 'karma.conf.js'
			}
		},
		*/
		mochaTest: {
			options: {
				reporter: 'spec'
			},
			test: {
				src: ['test/mocha/*_mocha.js']
			}
		},
		nodeunit: {
			all: ['test/nodeunit/*_nodeunit.js']
		},
		run: {
			/*
			options: {
				jest: {
					testEnvironment: 'jsdom',
					testMatch: [
						'<rootDir>/test/jest/*_jest.js'
					]
				}
			},
			*/
			npm_test_jest: {
				exec: 'npm run test-jest --silent'
			}
		} /* ,
		watch: {
			js: {
				files: [
					'*.js',
					'src/*.js',
					'test/** /*.js' // TODO: Delete the space in this string.
				],
				tasks: 'build'
			},
			pkg: {
				files: 'package.json',
				tasks: 'build'
			},
			readme: {
				files: 'README.md',
				tasks: 'build'
			}
		} */
	});

	// Tasks
	grunt.loadNpmTasks('grunt-eslint');
	// grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-run');

	// Aliases

	// Old: $ npm i -D chai chai-http grunt grunt-cli grunt-eslint grunt-mocha-test grunt-nsp mocha
	// Old: grunt.registerTask('test', ['eslint', 'mochaTest', 'nsp']);

	// New: $ npm i -D grunt grunt-cli grunt-eslint grunt-contrib-nodeunit grunt-nsp
	// - Also install nodeunit-httpclient for Web tests.

	// grunt.registerTask('test', ['eslint', 'jasmine', 'karma', 'mochaTest', 'nodeunit']);
	grunt.registerTask('test', ['eslint', 'mochaTest', 'nodeunit', 'run:npm_test_jest']);

	grunt.registerTask('default', ['test']);
};
