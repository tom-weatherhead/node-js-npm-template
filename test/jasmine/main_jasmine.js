// node-js-npm-template/test/jasmine/main_jasmine.js

// Jasmine appears to be for testing code that runs in the browser.

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

/*
describe('App', function () {
	describe('helloWorld', () => {
		it('Rocks!', done => {
			// Arrange
			const expectedResult = 'Hello World!';

			// Act
			let actualResult = engine.helloWorld();

			// Assert

			// Chai.js has a flexible, fluent syntax for "expect" :
			// expect(result).not.null;			// eslint-disable-line no-unused-expressions
			// expect(result).to.not.be.null;	// eslint-disable-line no-unused-expressions
			expect(actualResult).to.be.not.null;		// eslint-disable-line no-unused-expressions

			expect(actualResult).to.equal(expectedResult);

			done();
		});
	});
});
*/
