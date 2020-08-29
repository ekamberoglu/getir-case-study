const request = require('supertest');
const app = require('../src/app');

describe('Test cases for /records end-point', () => {

    test('post /records should return 400 for invalid params', done => {
        request(app)
            .post('/records')
            .send({bar: 'It will not work hey!'})
            .then(response => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });

    test('post /records should return 400 for missing maxCount parameter', done => {
        request(app)
            .post('/records')
            .send({
                startDate: '2009-03-18',
                endDate: '2019-03-13',
                minCount: 383,
            })
            .then(response => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });

    test('post /records should return 400 for invalid startDate format parameters', done => {
        request(app)
            .post('/records')
            .send({
                startDate: '01-03-2009',
                endDate: '2019-03-13',
                minCount: 383,
                maxCount: 500
            })
            .then(response => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });

    test('post /records should return 400 for invalid minCount and maxCount parameters -2', done => {
        request(app)
            .post('/records')
            .send({
                startDate: '2009-03-18',
                endDate: '2019-03-13',
                minCount: '',
                maxCount: 'aa'
            })
            .then(response => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });

    test('post /blabla should return 404 for invalid end-point', done => {
        request(app)
            .get('/blabla')
            .then(response => {
                expect(response.statusCode).toBe(404);
                done();
            });
    });

    test('post /records should return 200 for valid parameters', done => {
        request(app)
            .post('/records')
            .send({
                startDate: '2009-03-18',
                endDate: '2018-03-13',
                minCount: 2700,
                maxCount: 3000
            })
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body.code).toBe(0);
                expect(response.body.msg).toBe('Success');
                done();
            });
    });
});
