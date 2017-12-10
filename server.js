 // ================================================
// 				BURGERS- SERVER.JS
// ================================================

var express = require("express");
var bodyParser = require("body-parser");
var worms = require("./config/orm.js");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("assets"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// =====================================================
// 						ROUTES
// =====================================================
app.get("/", function(req, res){
  console.log("res from app.get on server.js");
  var burgerResults = worms.displayAll("burgers", 0, function(){
  	console.log("burgerResults");
  	console.log(burgerResults);

  res.render("index", {notDevoured: burgerResults}); //currently returns as undefined
  });
});

    
//create a route that that selects all of the devoured burgers
//from the database and print them to the appropriate div

//create a route that is called by the devoured button that
//changes the value of devoured in the database and redirects
//to "/" to reprint all of the burgers to the appropriate div

//create a post route connected to the form submission to update
//the database and then redirects to "/" to reprint all the burgers
//in their appropriate div

app.listen(port); 















