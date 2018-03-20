var express = require('express');
var router = express.Router();
var dbutil = require('../database/mysql.js');
var Q = require('Q');

// return all by production id 
router.get('/', function(req, res, next) {
  var query = 
  `select product_id, productName
     from product
     order by product_id`;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      if(rows.length == 0) throw err;

      var ob = {};
      ob.products = rows;
      res.send(JSON.stringify(ob));
    });
});

// return specific product info
router.get('/:pdt_id', function(req, res, next) {
  var query = 
  `select *
     from product
     where product_id = ` + req.params.pdt_id;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// create new product
router.post('/new/:productName', function(req, res, next) {
  var productName = req.params.productName;
  var query =
    "INSERT INTO product (productName) VALUES ('" + productName + "');";

    // INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')

  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// create new product
router.post('/new_all/:productName/:standardSalesPrice/:productDesignation', function(req, res, next) {
  var productName = req.params.productName;
  var standardSalesPrice = req.params.standardSalesPrice;
  var productDesignation = req.params.productDesignation;
  var query =
    "INSERT INTO product (productName,standardSalesPrice,productDesignation) VALUES ('" + productName + "'," + standardSalesPrice + ",'" + productDesignation + "');";

    // INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')

  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 


// update a product
router.post('/update_product/:product_id/:productName/:standardSalesPrice/:productDesignation', function(req, res, next) {
  var product_id = req.params.product_id;
  var productName = req.params.productName;
  var standardSalesPrice = req.params.standardSalesPrice;
  var productDesignation = req.params.productDesignation;
  var query =
    "UPDATE product SET standardSalesPrice = " + standardSalesPrice + ",productDesignation = '" + productDesignation + "',productName = '" + productName + "' WHERE product_id = " + product_id + " ";

    // UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'

  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// update productname
router.post('/update_productname/:product_id/:productName', function(req, res, next) {
  var product_id = req.params.product_id;
  var productName = req.params.productName;
  var query =
    "UPDATE product SET productName = '" + productName + "' WHERE product_id = " + product_id + " ";

    // UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'

  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// update product salesprice
router.post('/update_salesprice/:product_id/:standardSalesPrice', function(req, res, next) {
  var product_id = req.params.product_id;
  var standardSalesPrice = req.params.standardSalesPrice;
  var query =
    "UPDATE product SET standardSalesPrice = " + standardSalesPrice + " WHERE product_id = " + product_id + " ";

    // UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'

  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// update product designation
router.post('/update_designation/:product_id/:productDesignation', function(req, res, next) {
  var product_id = req.params.product_id;
  var productDesignation = req.params.productDesignation;
  var query =
    "UPDATE product SET productDesignation = '" + productDesignation + "' WHERE product_id = " + product_id + " ";

    // UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'

  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});


// delete a product
router.delete('/:product_id', function(req, res, next) {
  var product_id = req.params.product_id;
  var query =
    "DELETE FROM product WHERE product_id = " + product_id + ";";
    
    //  DELETE FROM customers WHERE address = 'Mountain 21'

  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 


module.exports = router;
