// Testing modules imports
import chai from 'chai';
import chaiHttp from 'chai-http';

// Import the Express application to be tested
import App from '../../../index';

// chai destructuring
const { expect } = chai;

// chai-http middleware
chai.use(chaiHttp);

// Tests descriptions

describe('Short URL Tests', () => {
    /**
     * TEST: FETCH SHORT URLS ALL
     */
    describe('GET: /', () => {
        it('Should Fetch all the ShortUrl documents from mongoDB', done => {
            chai.request(App)
                .get('/')
                .end((err, response) => {
                    // errors check
                    expect(err).to.be.null;

                    // response body properties tests
                    expect(response.body).to.have.any.keys('urls', 'error');

                    // Expected response tests
                    if (response.body.urls) {
                        expect(response.status).to.be.equal(200);
                        expect(response.body.urls).to.be.an('array');
                    }

                    // Error response test
                    if (response.body.error) {
                        // error type test
                        expect(response.status).to.not.be.equal(400);
                        expect(response.body.error).to.be.a('string');
                    }

                    // call the done method to indicate end of the request
                    done();
                });
        });
    });

    /**
     * TEST: FETCH SHORT URL SINGLE
     */
    describe('GET: /:id', () => {
        it('Should query the mongoDB and find the document with the given id', done => {
            chai.request(App)
                .get('/:id')
                .query({ id: '6101ab3aa110ce489cfb739a' })
                .end((err, response) => {
                    // error checks
                    expect(err).to.be.null;

                    // response checks
                    expect(response.body).to.have.any.keys('url', 'error');

                    // expected response test
                    if (response.body.url) {
                        // correct status code check
                        expect(response.status).to.be.equal(200);

                        // correct url type check
                        expect(response.body.url).to.be.an('string');
                    }

                    // end of the request
                    done();
                });
        });
    });
    describe('GET: /:id', () => {
        it('Should query the mongoDB and find the document with the given id', done => {
            chai.request(App)
                .get('/:id')
                .query({ id: '6101ab3aa110ce489cfb739a' })
                .end((err, response) => {
                    // error checks
                    expect(err).to.be.null;

                    // response checks
                    expect(response.body).to.have.any.keys('url', 'error');

                    // expected response test
                    if (response.body.url) {
                        // correct status code check
                        expect(response.status).to.be.equal(200);

                        // correct url type check
                        expect(response.body.url).to.be.an('string');
                    }

                    // end of the request
                    done();
                });
        });
    });
});

/**
 * "test": "env TS_NODE_COMPILER_OPTIONS='{ \"module\": \"commonjs\" }' mocha -w --watch-extensions ts -r ts-node/register './src/api/v1/test/*.ts'"
 */
