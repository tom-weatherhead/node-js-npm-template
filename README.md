# node-js-npm-template
A Node.js / npm project template.

[![build status](https://secure.travis-ci.org/tom-weatherhead/node-js-npm-template.svg)](http://travis-ci.org/tom-weatherhead/node-js-npm-template)

Installation instructions:

$ npm i

To lint and test the project using Grunt:

$ npm start

npm packages needed for unit testing:

- Jasmine + Karma: $ npm i -D grunt-contrib-jasmine grunt-karma jasmine-core karma karma-chrome-launcher karma-jasmine karma-phantomjs-launcher ?
- Jest: $ npm i -D grunt-run jest
- Mocha: $ npm i -D chai chai-http grunt-mocha-test mocha
- nodeunit: $ npm i -D grunt-contrib-nodeunit

	"devDependencies": {
		"chai": "^4.2.0",
		"chai-http": "^4.2.0",
		"grunt": "^1.0.3",
		"grunt-contrib-jasmine": "^2.0.2",
		"grunt-contrib-nodeunit": "^2.0.0",
		"grunt-eslint": "^21.0.0",
		"grunt-karma": "^3.0.0",
		"grunt-mocha-test": "^0.13.3",
		"grunt-run": "^0.8.1",
		"jasmine-core": "^3.2.1",
		"jest": "^23.6.0",
		"karma": "^3.0.0",
		"karma-chrome-launcher": "^2.2.0",
		"karma-jasmine": "^1.1.2",
		"karma-phantomjs-launcher": "^1.0.4",
		"mocha": "^5.2.0"
	},
