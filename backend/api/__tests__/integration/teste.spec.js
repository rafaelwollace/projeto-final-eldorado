const request = require('supertest');
const app = require("../..");

describe('Testando EndPoint Category', function () {

    it('Lista de Category', function (done) {
        request(app)
            .get('/api/category')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('Cadastro de Category', function (done) {
        request(app)
            .post('/api/category')
            .send({ Id: 1, Name: "Ti" })
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('Deleteando Category ID 1', function (done) {
        request(app)
            .delete('/api/category/1')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    //erro de fk não existe no db
    it('Cadastro de Device', function (done) {
        request(app)
            .post('/api/device')
            .send({
                "id": 1,
                "Color": "Black",
                "PartNumber": 123456,
                "Category_fk": 2
            })
            .set('Accept', 'application/json')
            .expect(200, done);
    });


    it('Lista de Device', function (done) {
        request(app)
            .get('/api/device')
            .set('Accept', 'application/json')
            .expect(200, done);
    });


});

