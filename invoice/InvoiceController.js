var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Invoice = require('./invoice');

// generate a new invoice
router.post('/', function(req, res){

  // check userType
  // if (userType = customer) { create invoice } else { throw }

  Invoice.create({
    customerId: req.body.customerId,
    invoiceType: req.body.invoiceType,
    amount: req.body.amount,
    totalAmount: req.body.totalAmount
  },
  function(err, invoice) {

    if (err) return res.status(500).send("Problem generating invoice");

    res.status(200).send(invoice);
  });

});

// TODO
// case0: return invoice by month (req: customerId, month)
// case1: return shop invoice (req: customerId, invoiceType=shop)
// case2: return invoice by address (req: customerId, addressId)
// case3: return all invoice (req: customerId)

router.get('/', function(req, res) {

  var customerId = req.query.customerId;
  var invoiceType = req.query.invoiceType;
  var filter = req.query.filter;
  var month = req.query.month;
  var addressId = req.query.addressId;

  Invoice.findById(customerId, function(err, invoice) {

    // if (invoiceType || filter || month || addressId) {
    //   filter 
    // }

    if (err) return res.status(500).send("Problem locating the invoice");

    if (!invoice) return res.status(404).send("No invoice found");

    res.status(200).send(invoice);
  });
});

module.exports = router;