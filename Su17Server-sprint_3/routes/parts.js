var express = require('express');
var router = express.Router();
var dbutil = require('../database/mysql.js');
var Q = require('Q');

// return all
router.get('/', function(req, res, next) {
  var query = 
  `select part_id, description
     from part
     order by part_id`;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      if(rows.length == 0) throw err;

      var ob = {};
      ob.parts = rows;
      res.send(JSON.stringify(ob));
    });
});

// return all from part by part_id
router.get('/:part_id', function(req, res, next) {
  var query = 
  `select *
     from part
     where part_id = ` + req.params.part_id;

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      if(rows.length == 0) throw err;

      res.send(JSON.stringify(rows[0]));
    });
});

// return all with mfr-id
router.get('/mfrid/:mfr_id', function(req, res, next) {
  var manufacturer = req.params.mfr_id;
  var query = 
  "select * from part where manufacturer = "+ manufacturer + ";";

  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      if(rows.length == 0) throw err;

      var ob = {};
      ob.parts = rows;
      res.send(JSON.stringify(ob));
    });
});

// insert part into database using name
router.post('/new/:part_name/:mfr_id', function(req, res, next) {
  var description = req.params.part_name;
  var manufacturer = req.params.mfr_id;
  var query =
    "insert into part (description,manufacturer) values ('" + description + "', "+ manufacturer +");";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// insert part into database using all
router.post('/new/:part_name/:value/:units/:mfrprtnum/:mfr_id/:cost/:time/:qty', function(req, res, next) {
  var description = req.params.part_name;
  var manufacturer = req.params.mfr_id;
  var VALUE = req.params.value;
  var units = req.params.units;
  var mfrPartNumber = req.params.mfrprtnum;
  var standardCost = req.params.cost;
  var standardLeadTime = req.params.time;
  var quantityOnHand = req.params.qty;
  var query =
    "insert into part (description,manufacturer,VALUE,units,mfrPartNumber,standardCost,standardLeadTime,quantityOnHand) values ('" 
    + description + "', " + manufacturer + ", " + VALUE + ", '" + units + "', '" + mfrPartNumber + "', " + standardCost + ", " + standardLeadTime + ", " + quantityOnHand + ");";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// Update part into database using all
router.post('/update_all/:prt_id/:part_name/:value/:units/:mfrprtnum/:mfr_id/:cost/:time/:qty', function(req, res, next) {
  var part_id = req.params.prt_id;
  var description = req.params.part_name;
  var manufacturer = req.params.mfr_id;
  var VALUE = req.params.value;
  var units = req.params.units;
  var mfrPartNumber = req.params.mfrprtnum;
  var standardCost = req.params.cost;
  var standardLeadTime = req.params.time;
  var quantityOnHand = req.params.qty;
  var query =
    "UPDATE part SET description = '" + 
    description + "',manufacturer = " + manufacturer + ",VALUE = " + VALUE + ",units = '" + units + "',mfrPartNumber = '" + 
    mfrPartNumber + "',standardCost = " + standardCost + ",standardLeadTime = " + standardLeadTime + ",quantityOnHand = " + 
    quantityOnHand + " WHERE part_id = "+ part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- description 
router.post('/update_description/:one/:two', function(req, res, next) {
  var part_id = req.params.one;
  var description = req.params.two;
  var query =
    "UPDATE part SET description = '" + description +"' WHERE part_id = "+ part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- value 
router.post('/update_value/:one/:two', function(req, res, next) {
  var part_id = req.params.one;
  var value = req.params.two;
  var query =
    "UPDATE part SET value = " + value +" WHERE part_id = "+ part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- units
router.post('/update_units/:one/:two', function(req, res, next) {
  var part_id = req.params.one;
  var units = req.params.two;
  var query =
    "UPDATE part SET units = '" + units +"' WHERE part_id = "+ part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- mfrPartNumber 
router.post('/update_mfrPartNumber/:one/:two', function(req, res, next) {
  var part_id = req.params.one;
  var mfrPartNumber = req.params.two;
  var query =
    "UPDATE part SET mfrPartNumber = '" + mfrPartNumber +"' WHERE part_id = "+ part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});


// updates -- manufacturer 
router.post('/update_manufacturer/:one/:two', function(req, res, next) {
  var part_id = req.params.one;
  var manufacturer = req.params.two;
  var query =
    "UPDATE part SET manufacturer = " + manufacturer +" WHERE part_id = "+ part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- standardCost 
router.post('/update_standardCost/:one/:two', function(req, res, next) {
  var part_id = req.params.one;
  var standardCost = req.params.two;
  var query =
    "UPDATE part SET standardCost = " + standardCost +" WHERE part_id = "+ part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- standardLeadTime 
router.post('/update_standardLeadTime/:one/:two', function(req, res, next) {
  var part_id = req.params.one;
  var standardLeadTime = req.params.two;
  var query =
    "UPDATE part SET standardLeadTime = " + standardLeadTime +" WHERE part_id = "+ part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- quantityOnHand INT
router.post('/update_quantityOnHand/:one/:two', function(req, res, next) {
  var part_id = req.params.one;
  var quantityOnHand = req.params.two;
  var query =
    "UPDATE part SET quantityOnHand = " + quantityOnHand +" WHERE part_id = "+ part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// delete part
router.delete('/:part_id', function(req, res, next) {
  var query =
    "DELETE FROM part WHERE part_id = " + req.params.part_id + ";";
  console.log(query);
  dbutil.query(query,    
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
}); 

module.exports = router;
