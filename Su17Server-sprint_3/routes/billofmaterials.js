var express = require('express');
var router = express.Router();
var dbutil = require('../database/mysql.js');
var Q = require('Q');

// returns list of bill of materials
router.get('/', function(req, res, next) {
  var query = 
  `select * 
     from BillOfMaterials
     order by bom_id`;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      if(rows.length == 0) throw err;

      var ob = {};
      ob.billofmaterials = rows;
      res.send(JSON.stringify(ob));
    });
});

// return all bom_id info
router.get('/bom_id_all/:bom_id', function(req, res, next) {
  var bom_id = req.params.bom_id;
  var query = 
  `Select * FROM billofmaterials WHERE bom_id = ` + bom_id;
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// return all lineitem info
router.get('/lineitem_all/:line_item_id', function(req, res, next) {
  var line_item_id = req.params.line_item_id;
  var query = 
  `Select * FROM lineitem WHERE line_item_id = ` + line_item_id;
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// return product info
router.get('/get_product/:bom_id', function(req, res, next) {
  var bom_id = req.params.bom_id;
  var query = 
  `Select product FROM billofmaterials WHERE bom_id = ` + bom_id;
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });  
});


// return version info
router.get('/get_version/:bom_id', function(req, res, next) {
  var bom_id = req.params.bom_id;
  var query = 
  `Select version_id FROM billofmaterials WHERE bom_id = ` + bom_id;
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// returns specific bill of materials
router.get('/:version_id', function(req, res, next) {
  var version_id = req.params.version_id;
  var query = 
  `SELECT bom_id, version_id FROM BillOfMaterials WHERE version_id = ` + version_id;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// creates new bom
router.post('/new/:one', function(req, res, next) {
  var product = req.params.one;
  var query =
    "INSERT INTO billofmaterials (product) VALUES (" + product + ");";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// creates new bom with product and version
router.post('/new_bom_version/:one/:two', function(req, res, next) {
  var product = req.params.one;
  var version_id = req.params.two
  var query =
    "INSERT INTO billofmaterials (product, version_id) VALUES (" + product + ", " + version_id + ");";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// updates by adding lint item with quantity and part_id
// signature is /billofmaterials/add_lineitem/bom_id/lineitem/quantity/part_id
router.post('/add_lineitem/:one/:two/:three', function(req, res, next) {
  var bom = req.params.one;
  var quantity = req.params.two;
  var part = req.params.three;
  
  var query =
    "INSERT INTO lineitem (bom,part,quantity) VALUES (" + bom + ", " + part + ", " + quantity + ");";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// Updates line item in BOM
router.post('/update_lineitem/:one/:two/:three/:four', function(req, res, next) {
  var bom = req.params.one;
  var line_item_id = req.params.two;
  var part = req.params.three;
  var quantity = req.params.four;
  
  var query =
    "UPDATE  lineitem SET part = " + part + ",quantity = " + quantity + " WHERE bom = "+ bom +" AND line_item_id = "+ line_item_id +";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// updates -- index bom_id to update version_id
router.post('/update_version_id/:one/:two', function(req, res, next) {
  var bom_id = req.params.one;
  var version_id = req.params.two;
  var query =
    "UPDATE billofmaterials SET version_id = " + version_id +" WHERE bom_id = "+ bom_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });

  
});  

// updates -- index bom_id to update product
router.post('/update_product/:one/:two', function(req, res, next) {
  var bom_id = req.params.one;
  var product = req.params.two;
  var query =
    "UPDATE billofmaterials SET product = " + product +" WHERE bom_id = "+ bom_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// "INSERT INTO billofmaterials (product,version_id) VALUES (" + product + ", " + version_id ");"
router.post('/insert_product/:one/:two', function(req, res, next) {
  var product = req.params.one;
  var version_id = req.params.two;
  var query =
    "INSERT INTO billofmaterials (product,version_id) VALUES (" + product + ", " + version_id + ");";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// delete bom and included line items
router.delete('/:bom_id', function(req, res, next) {
  var query1 =    "DELETE FROM lineitem WHERE bom = " + req.params.bom_id + ";";
   var query2 =  "DELETE FROM billofmaterials WHERE bom_id = " + req.params.bom_id + ";";

  console.log(query1);
  dbutil.query(query1,    
    function (err, rows, fields) {
      
      dbutil.query(query2,    
    function (err, rows, fields) {
      if(err) throw err
      });
      if(err) throw err
      res.send('OK');
  });
}); 



// delete lineitem
router.post('/delete_lineitem/:bom_id', function(req, res, next) {
  var query =
    "UPDATE billofmaterials SET line_item_id = NULL WHERE bom_id = "+ req.params.bom_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

module.exports = router;