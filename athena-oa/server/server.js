var athenaData = require("./athena-info.json");

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

app.get("/api/products", function (req, res) {
    res.status(200).json(athenaData.products.at(0));
});