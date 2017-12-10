var connection = require("./connection.js");
var exhbs = require("express-handlebars");

// Object Relational Mapper (ORM)

var orm = {
  displayAll: function(table, devoured, cb){
    connection.query("SELECT * FROM ?? WHERE devoured=?", [table, devoured], function(err, result){
      console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;
