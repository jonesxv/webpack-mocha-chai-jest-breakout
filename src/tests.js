const { expect } = require('chai')
const { testing } = require('./lib')

describe('testing', function () {
    it('should be a function', function () {
        expect(testing).to.be.a('function')
    })
})