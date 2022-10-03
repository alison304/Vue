//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Public APIS', () => {
    beforeEach((done) => { 
           done();
    });

    describe('/GET entries', () => {
        it('it should GET all the entries', (done) => {
        chai.request("https://api.publicapis.org")
            .get('/entries')
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('count');
                    done();
            });
        });
    });

    describe('/GET random', () => {
        it('list a single entry selected at random', (done) => {
        chai.request("https://api.publicapis.org")
            .get('/random')
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('count');
                    done();
            });
        });
    });    

});