var mysql = require('mysql');
var db;

var connectDB = function () {
  db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'su17'
  });

  db.connect(function(err){
    if(err){
      console.log('Error connecting to database');
      return;
    }
  });
}//connectDB()

var disconnectDB = function () {
  db.end(function(err){
    if(err){
      console.log('Error disconnecting from database');
      return;
    }
  });
}//disconnectDB()

module.exports.query = function(query, callback) {
  connectDB();
  db.query(query, callback);
  disconnectDB();
}