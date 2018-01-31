var express = require("express");
var PORT = 8421;
var path = require("path");
var bodyParser = require("body-parser");
app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('public'))

//Home Page GET request
app.get("/", function (req, res) {
    res.render("index");
});

//Home Page POST request
app.post("/", function (req, res) {
    sendToMailChimp(req.body.email);
    res.redirect("/");
});

//Listen the web app here!
app.listen(PORT, function () {
    console.log("App Started!");
});

//Send the captured email on form to the MailChimp
function sendToMailChimp(email) {
    var request = require("request");

    var options = {
        method: 'POST',
        url: 'https://us17.api.mailchimp.com/3.0/lists/899a16e5d0/members',
        headers:
            {
                'postman-token': '23a36fa8-8ba6-b1bd-e5fa-c32e677b9bd0',
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                authorization: 'Basic YW55c3RyaW5nOjYzNGY0NWNkZDFiNDg0MDhiMGE5NjI0ODgxYWZmZTIwLXVzMTc='
            },
        body: {email_address: email, status: 'subscribed'},
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });

}