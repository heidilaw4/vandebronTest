var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String,
  customerId: String,
  addressId: String,
  address: String,
  password: String
});

mongoose.model('Customer', CustomerSchema);

module.exports = mongoose.model('Customer');