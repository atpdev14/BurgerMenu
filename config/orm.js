var connection = require("./connection.js");
var exhbs = require("express-handlebars");

// Object Relational Mapper (ORM)

var orm = {
  displayUneaten: function(table, devoured, cb){
    connection.query("SELECT * FROM ?? WHERE devoured=?", [table, devoured], function(err, result){
      // console.log(result);
      cb(result);
    });
  },

   displayEaten: function(table, devoured, cb){
    connection.query("SELECT * FROM ?? WHERE devoured=?", [table, devoured], function(err, result){
      console.log("from displayEaten in orm.js");
      console.log(result);
      cb(result);
    });
  }
};
module.exports = orm;
 