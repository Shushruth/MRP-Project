var express = require('express');
var router = express.Router();
var dbutil = require('../database/mysql.js');
var Q = require('Q');

router.get('/', function(req, res, next) {
  var query = 
  `select manufacturer_id, name
     from manufacturer
     order by manufacturer_id`;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      if(rows.length == 0) throw err;

      var ob = {};
      ob.manufacturers = rows;
      res.send(JSON.stringify(ob));
    });
});

// return manufacturer details by mfr_id
router.get('/mfr_id/:mfr_id', function(req, res, next) {
  var query = 
  `select *
     from manufacturer
     where manufacturer_id = ` + req.params.mfr_id;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// insert manufacturer into database using name
router.post('/mfr_name/:mfr_name', function(req, res, next) {
  var query =
    "insert into manufacturer (name) values ('" + req.params.mfr_name + "')";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// update a Manufacturer
router.post('/update_name/:name/:manufacturer_id', function(req, res, next) {
  //var name = req.params.name;
  var manufacturer_id = req.params.manufacturer_id;
    var query =
    "UPDATE manufacturer SET name = \'" + req.params.name + "\' WHERE manufacturer_id = " + manufacturer_id + " ";

 

    // UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'

  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

// delete by manufacturer id
router.delete('/:manufacturer_id', function(req, res, next) {
  var query1 = "DELETE FROM manufacturer WHERE manufacturer_id = " + req.params.manufacturer_id + ";";
  var query2 = "DELETE FROM part WHERE manufacturer = " + req.params.manufacturer_id + ";";
  console.log(query2);
  dbutil.query(query2,    
    function (err, rows, fields) {
      dbutil.query(query1,    
    function (err, rows, fields) {
      if(err) throw err
    });
      if(err) throw err
      res.send('OK');
  });
}); 

module.exports = router;