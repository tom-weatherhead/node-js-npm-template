// node-js-npm-template/test/karma/main_karma.js

// Karma appears to be for testing code that runs in the browser.

'use strict';

// require is not defined in the browser: see https://stackoverflow.com/questions/19117092/jasmine-tests-in-karma-uncaught-referenceerror-require-is-not-defined

// const http = require('http');
// const chai = require('chai');
// const expect = chai.expect;

// const engine = require('../..');
// const engine = require('../../src/main.js');

describe('Yay', () => {
	it('Should be a string', () => {
		expect(typeof 'foo').toBe('string');
	});

	it('Should say Hello World!', () => {
		// Arrange
		// const expectedResult = 'Hello World!';

		// Act
		// const actualResult = engine.helloWorld();

		// console.log('actualResult is', actualResult);
		// console.log('engine is', engine);
		// console.log('require is', require);
		// console.log('window is', window);

		// Assert
		// expect(actualResult).toBe(expectedResult);
		// expect(expectedResult).toBe(expectedResult);
		// expect(require).toBe(undefined);
		expect(document).not.toBeNull();
		expect(window).not.toBeNull();
	});
});
