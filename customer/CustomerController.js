var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Customer = require('./customer');

// creates a new customer
router.post('/', function(req, res){

  Customer.create({
    name: req.body.name,
    customerId: req.body.customerId,
    addressId: req.body.addressId,
    address: req.body.address,
    password: req.body.password
  },
  function(err, customer){
    if (err) return res.status(500).send("Problem adding info to database");

    res.status(200).send(customer);
  });

});

// returns all returns all customers in the database
router.get('/', function(req, res){

  Customer.find({}, function(err, customer) {
    if (err) return res.status(500).send("Problem finding any customers");

    res.status(200).send(customer)
  })
});

module.exports = router;