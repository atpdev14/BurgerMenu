 // ================================================
// 				BURGERS- SERVER.JS
// ================================================

var express = require("express");
var bodyParser = require("body-parser");
var worms = require("./config/orm.js");

var app = express();
var port = process.env.PORT || 3000;
// var port = 3000;

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
	var allBurgers = {};
  worms.displayUneaten("burgers", 0, function(data1){
  	allBurgers.notDevoured = data1;
  });

	worms.displayEaten("burgers", 1, function(data2){
		allBurgers.devoured = data2;
			res.render("index", allBurgers);
	});
});


app.post("/api/newburger", function(req, res){
	var burger_name = req.body.name;
	console.log("Burger Name (server.js): " + burger_name);
	worms.addBurger(burger_name, 0, function(){
		res.redirect("/");
	});
});



 
//create a route that is called by the devoured button that
//changes the value of devoured in the database and redirects
//to "/" to reprint all of the burgers to the appropriate div

//create a post route connected to the form submission to update
//the database and then redirects to "/" to reprint all the burgers
//in their appropriate div

app.listen(port);  



// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });















