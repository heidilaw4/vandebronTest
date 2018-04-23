var mongoose = require('mongoose');

var InvoiceSchema = new mongoose.Schema({
  customerId: String,
  invoiceType: String,
  amount: Number,
  totalAmount: Number
});

mongoose.model('Invoice', InvoiceSchema);

module.exports = mongoose.model('Invoice');
