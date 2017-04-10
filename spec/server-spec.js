const request = require('supertest');
const expect = require('chai').expect

const app = require('../server/routes');
const orders = require('../data/orders.json');

describe('Kofile Challenge', () => {
  describe('Error Tests', () => {
    it('Returns a 404 with an invalid endpoint', done => {
      request(app)
        .post('/error')
        .expect(404)
        .end((err, res) => {
          done(err);
        });
    });
    it('Returns a 400 if order data is not provided for the order price endpoint', done => {
      request(app)
        .post('/orderPrice')
        .expect(400)
        .end((err, res) => {
          done(err);
        });
    });
    it('Returns a 400 if order data is not provided for the order dist endpoint', done => {
      request(app)
        .post('/orderDist')
        .expect(400)
        .end((err, res) => {
          done(err);
        });
    });
    it('Returns a 500 if order data is not valid for the order price endpoint', done => {
      request(app)
        .post('/orderPrice')
        .send([{error: 'error'}])
        .expect(500)
        .end((err, res) => {
          done(err);
        });
    });
    it('Returns a 500 if order data is not valid for the order dist endpoint', done => {
      request(app)
        .post('/orderDist')
        .send([{error: 'error'}])
        .expect(500)
        .end((err, res) => {
          done(err);
        });
    });
  });
  describe('Order Price', () => {
    it('Returns a 200 if order data is valid for the order price endpoint', done => {
      request(app)
        .post('/orderPrice')
        .send(orders)
        .expect(200)
        .end((err, res) => {
          done(err);
        });
    });
    it('Returns JSON data if order data is valid for the order price endpoint', done => {
      request(app)
        .post('/orderPrice')
        .send(orders)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.length.above(0);
          done();
        });
    });
  });
  describe('Order Dist', () => {
    it('Returns a 200 if order data is valid for the order dist endpoint', done => {
      request(app)
        .post('/orderDist')
        .send(orders)
        .expect(200)
        .end((err, res) => {
          done(err);
        });
    });
    it('Returns JSON data if order data is valid for the order dist endpoint', done => {
      request(app)
        .post('/orderDist')
        .send(orders)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.length.above(0);
          done();
        });
    });
  });
});