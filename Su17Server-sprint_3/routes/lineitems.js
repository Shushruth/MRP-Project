var express = require('express');
var router = express.Router();
var dbutil = require('../database/mysql.js');
var Q = require('Q');

// return list of lineitems
router.get('/', function(req, res, next) {
  var query =
  `select line_item_id, part
     from lineitem
     order by line_item_id`;

  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      if(rows.length == 0) throw err;

      var ob = {};
      ob.lineitems = rows;
      res.send(JSON.stringify(ob));
    });
});


// return list of lineitems where bom_id = something .
router.get('/:bom_id', function(req, res, next) {
  var bom_id = req.params.bom_id;
  var query =
  `select *
     from lineitem
     WHERE bom = ` + bom_id;
console.log(query);
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      if(rows.length == 0) throw err;

      var ob = {};
      ob.lineitems = rows;
      res.send(JSON.stringify(ob));
    });
});

// return specific item info
router.get('/bom_part_lineitem_id/:line_item_id', function(req, res, next) {
  var query =
  `Select bom, part FROM lineitem WHERE line_item_id = ` + req.params.line_item_id;
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
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

// return bom info
router.get('/get_bom/:line_item_id', function(req, res, next) {
  var line_item_id = req.params.line_item_id;
  var query =
  `Select bom FROM lineitem WHERE line_item_id = ` + line_item_id;
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// return part info
router.get('/get_part/:line_item_id', function(req, res, next) {
  var line_item_id = req.params.line_item_id;
  var query =
  `Select part FROM lineitem WHERE line_item_id = ` + line_item_id;
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// return quantity info
router.get('/get_quantity/:line_item_id', function(req, res, next) {
  var line_item_id = req.params.line_item_id;
  var query =
  `Select quantity FROM lineitem WHERE line_item_id = ` + line_item_id;
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      var ob = rows.length ? rows[0] : {};
      res.send(JSON.stringify(ob));
  });
});

// create new lineitem
router.post('/new/:one', function(req, res, next) {
  var bom = req.params.one;
  var query =
    "INSERT INTO lineitem (bom) VALUES (" + bom + ");";
  console.log(query);
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// create new bom_part_quantity in lineitem
router.post('/bom_part_quantity/:one/:two/:three', function(req, res, next) {
  var bom = req.params.one;
  var part = req.params.two;
  var quantity =  req.params.three;
  var query =
    "INSERT INTO lineitem (bom,part,quantity) VALUES (" + bom + ", " + part + ", " + quantity + ");";
  console.log(query);
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- index bom_id to update part
router.post('/update_part/:one/:two', function(req, res, next) {
  var line_item_id = req.params.one;
  var part = req.params.two;
  var query =
    "UPDATE lineitem SET part = " + part +" WHERE line_item_id = "+ line_item_id + ";";
  console.log(query);
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// updates -- index bom_id to update quantity
router.post('/update_quantity/:one/:two', function(req, res, next) {
  var line_item_id = req.params.one;
  var quantity = req.params.two;
  var query =
    "UPDATE lineitem SET quantity = " + quantity +" WHERE line_item_id = "+ line_item_id + ";";
  console.log(query);
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

// delete item
router.delete('/:line_item_id', function(req, res, next) {
  var line_item_id = req.params.line_item_id;
  var query =
    "DELETE FROM lineitem WHERE line_item_id = " + line_item_id + ";";
  console.log(query);
  dbutil.query(query,
    function (err, rows, fields) {
      if(err) throw err
      res.send('OK');
  });
});

module.exports = router;