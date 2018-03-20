var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var db;
var Q = require('Q');

function connectDB() {
  db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'archetype'
  });

  db.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
  });
}//connectDB()

function disconnectDB() {
  db.end(function(err){
    if(err){
      console.log('Error disconnecting from Db');
      return;
    }
  });
}//disconnectDB()

router.get('/', function(req, res, next) {
  res.send('API GET');
});

router.get('/test', function(req, res, next) {
  res.send('API test');
});

router.get('/courses', function(req, res, next) {
    var query = 
  `select dept_prefix, course_num, course_name
     from course
     where dept_prefix = "CS"
     order by course_num`;
  connectDB();
  db.query(query,    
    function (err, rows, fields) {
    if(err) throw err
    if(rows.length == 0) throw err;

    var ob = {};
    ob.courses = [];
    ob.courses = rows;
    res.send(JSON.stringify(ob));
  });
  disconnectDB();
});

module.exports = router;