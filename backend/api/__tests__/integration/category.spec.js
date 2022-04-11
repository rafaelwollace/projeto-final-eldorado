const request = require('supertest');
const app = require("../../../api");

describe('GET /category', function () {
    it('Lista de Category', function (done) {
        request(app)
            .get('/api/category')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});

describe('POST /category', function () {
    it('Cadastro de Category', function (done) {
        request(app)
            .post('/api/category')
            .send({ Name: "null" })
            .set('Accept', 'application/json')

            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});