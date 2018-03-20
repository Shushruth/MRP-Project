var express = require('express');
var router = express.Router();
var dbutil = require('../database/mysql.js');
var Q = require('Q');

// return all from proction run
router.get('/', function(req, res, next) {
  var query = 
  `select production_run_id, product
     from ProductionRun
     order by production_run_id`;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      if(rows.length == 0) throw err;

      var ob = {};
      ob.productionruns = rows;
      res.send(JSON.stringify(ob));
    });
});

// return all from production run by id
router.get('/:prd_id', function(req, res, next) {
  var query = 
  `select *
     from ProductionRun
     where production_run_id = ` + req.params.prd_id;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// create new productionRun
router.post('/new/:pro_id', function(req, res, next) {
  var product = req.params.pro_id;
  var query =
    "INSERT INTO ProductionRun (product) VALUES (" + product + ");";

    // INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')

  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// updates -- all
router.post('/update_all/:prd_id/:pro/:qun/:start/:end/:status', function(req, res, next) {
  var production_run_id = req.params.prd_id;
  var product = req.params.pro;
  var quantity = req.params.qun;
  var targetStartDate = req.params.start;
  var targetCompleteDate = req.params.end;
  var status_id = req.params.status;
  var query =
    "UPDATE ProductionRun SET product = " + product +", quantity = " + quantity +", targetStartDate = '" + targetStartDate +"',targetCompleteDate = '" + targetCompleteDate +"', status_id = " + status_id +" WHERE production_run_id = "+ production_run_id +";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// updates -- product
router.post('/update_product/:one/:two', function(req, res, next) {
  var production_run_id = req.params.one;
  var product = req.params.two;
  var query =
    "UPDATE ProductionRun SET product = " + product +" WHERE production_run_id = "+ production_run_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// updates -- quantity INT 
router.post('/update_quantity/:one/:two', function(req, res, next) {
  var production_run_id = req.params.one;
  var quantity = req.params.two;
  var query =
    "UPDATE ProductionRun SET quantity = " + quantity +" WHERE production_run_id = "+ production_run_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- targetStartDate DATE
router.post('/update_targetStartDate/:one/:two', function(req, res, next) {
  var production_run_id = req.params.one;
  //var quantity = req.params.two;
  var query =
    "UPDATE ProductionRun SET targetStartDate = '" + req.params.two +"' WHERE production_run_id = "+ production_run_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});


// updates -- targetCompleteDate DATE
router.post('/update_quantity/:one/:two', function(req, res, next) {
  var production_run_id = req.params.one;
  var quantity = req.params.two;
  var query =
    "UPDATE ProductionRun SET targetCompleteDate = '" + targetCompleteDate +"' WHERE production_run_id = "+ production_run_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

/*
//   creates new productionrun
//   production_run_id INT, product INT, quantity INT, status_id INT
// use example: localhost:4000/productionruns/new_productionrun/9/5/345/2  
router.post('/new_productionrun/:one/:two/:three/:four', function(req, res, next) {
  var production_run_id = req.params.one;
  var product = req.params.two;
  var quantity = req.params.three;
  var status_id = req.params.four;
  var query =
    "INSERT INTO productionrun (production_run_id, product, quantity, status_id) VALUES (" 
        + production_run_id + ", " + product + ", " + quantity + ", " + status_id +  ");";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 
*/

// delete productionrun
router.delete('/:production_run_id', function(req, res, next) {
  var query =
    "DELETE FROM ProductionRun WHERE production_run_id = " + req.params.production_run_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

module.exports = router;