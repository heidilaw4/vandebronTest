var express = require('express');
var app = express();
var db = require('./db');

// Permissions middleware
// var PermissionController = require('./permission');

var InvoiceController = require('./invoice/InvoiceController');
var CustomerController = require('./customer/CustomerController');

app.use('/invoice', InvoiceController);
app.use('/customer', CustomerController);

module.exports = app;