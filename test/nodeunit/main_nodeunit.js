// node-js-npm-template/test/nodeunit/main_nodeunit.js

'use strict';

const engine = require('../..');

module.exports = {
	'helloWorld': {
		setUp: function (done) {
			console.log('nodeunit: Test \'helloWorld\' : setUp()');
			done();
		},
		test: function (test) {
			console.log('nodeunit: Test \'helloWorld\' : test()');
			test.expect(1);
			test.strictEqual(engine.helloWorld(), 'Hello World!', 'This is a test.');
			test.done();
		}
	}
};
