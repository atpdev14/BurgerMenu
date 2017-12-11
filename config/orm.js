var connection = require("./connection.js");
var exhbs = require("express-handlebars");

// Object Relational Mapper (ORM)

var orm = {
  displayUneaten: function(table, devoured, cb){
    connection.query("SELECT * FROM ?? WHERE devoured=?", [table, devoured], function(err, result){
      cb(result);
    });
  },

   displayEaten: function(table, devoured, cb){
    connection.query("SELECT * FROM ?? WHERE devoured=?", [table, devoured], function(err, result){
      cb(result);
    });
  },

  addBurger: function(burger_name, devoured, cb){
  	connection.query("INSERT INTO burgers(burger_name, devoured) VALUES(?, ?)", [burger_name, devoured], function(err, result){
  		cb(result);
  	});
  },

    update: function(objColVals, condition, cb) {
    connection.query("UPDATE burgers WHERE id=?", function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};
module.exports = orm;
 