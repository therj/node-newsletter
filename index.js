var express = require("express");
var PORT = 8421;
var path = require("path");
//uses current path to make file location and OS independent.

app = express();


//Home Page GET request
app.get("/", function (req, res) {
    res.send("Hello World");
    //Only first response is sent.
    res.sendFile(path.join(__dirname + '/abc.html'));
});


//Listen the web app here!
app.listen(PORT, function () {
    console.log("App Started!");
});