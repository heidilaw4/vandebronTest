var expect = require('chai').expect;
var sinon = require('sinon');

var Invoice = require('../../invoice/invoice');

describe('invoice', function() {
  it('should create new invoice', function(done) {

    var invoice = new Invoice({
      customerId: "asdlkfj",
      invoiceType: "AdvancedPayment",
      amount: 123,
      totalAmount: 123
    });

    invoice.validate(function(err) {
      expect(err).to.not.exist;
      done();
    });

    // stub with sinon
    // test if new Invoice is an instance of the stubbed obj
  })
})