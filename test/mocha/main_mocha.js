// node-js-npm-template/test/mocha/main_mocha.js

// Chai.js cheat sheet: See http://ricostacruz.com/cheatsheets/chai.html

'use strict';

const chai = require('chai');
const expect = chai.expect;

const engine = require('../..');

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
