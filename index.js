var express = require("express");
var PORT = 8421;
var path = require("path");

//uses current path to make file location and OS independent.
app = express();
app.set("view engine", "ejs");

app.use('/static', express.static('public'))
//Home Page GET request
app.get("/", function (req, res) {
    res.render("index");
});


//Listen the web app here!
app.listen(PORT, function () {
    console.log("App Started!");
});