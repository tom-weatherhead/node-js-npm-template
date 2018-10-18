// node-js-npm-template/test/jest/main_jest.js

/*
Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:

function sum(a, b) {
  return a + b;
}
module.exports = sum;

Then, create a file named sum.test.js. This will contain our actual test:

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
*/

'use strict';

const engine = require('../..');

test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3);
});

test('Hello World!', () => {
	expect(engine.helloWorld()).toBe('Hello World!');
});
