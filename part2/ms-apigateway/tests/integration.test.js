/* eslint-env node, mocha */
const expect = require('chai').expect
const fetch = require('node-fetch')

// Integration tests for Node.js service
const nodeURL = process.env.NODE_ENDPOINT

describe('Node service', function () {
  describe('#request base URL', function () {
    it('should get response 200', function (done) {
      fetch(nodeURL)
        .then(response => {
          expect(response.status).to.equal(200)
          done()
        })
    })
    it('should should be JSON and have a message', function (done) {
      fetch(nodeURL)
        .then(response => response.json())
        .then(json => {
          expect(json).to.have.property('message')
          done()
        })
        .catch(error => { done(error) })
    })
  })
})

// ToDo more tests
