// node-js-npm-template/test/mocha/http_mocha.js

// Chai.js cheat sheet: See http://ricostacruz.com/cheatsheets/chai.html

'use strict';

const http = require('http');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

describe('App', () => {
	const httpbinBaseUrl = 'https://httpbin.org';
	const httpbinStatusBaseUrl = '/status/';

	describe(httpbinBaseUrl + ' : GET ' + httpbinStatusBaseUrl + '200', () => {
		it('responds with status 200 OK', done => {
			// Arrange
			// const url = httpbinStatusBaseUrl + '200';

			// Act
			chai.request(httpbinBaseUrl)
				.get(httpbinStatusBaseUrl + '200')
				.end((err, res) => {
					// Assert
					expect(err).to.be.null;		// eslint-disable-line no-unused-expressions
					expect(res).to.have.status(200);

					console.log(res.statusCode, 'Status message is:', http.STATUS_CODES[res.statusCode]);

					done();
				});
		});
	});

	describe(httpbinBaseUrl + ' : GET ' + httpbinStatusBaseUrl + '404', () => {
		it('responds with status 404 Not Found', done => {
			// Arrange
			// const url = httpbinStatusBaseUrl + '404';

			// Act
			chai.request(httpbinBaseUrl)
				.get(httpbinStatusBaseUrl + '404')
				.end((err, res) => {
					// Assert
					expect(err).to.be.null;		// eslint-disable-line no-unused-expressions
					expect(res).to.be.not.null;		// eslint-disable-line no-unused-expressions
					expect(res).to.have.status(404);

					console.log(res.statusCode, 'Status message is:', http.STATUS_CODES[res.statusCode]);

					done();
				});
		});
	});
});
