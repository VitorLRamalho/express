const express = require("express");

const app = express();

app.get("/", function(req, res) {
    Response.send("<h1>Hello World</h1>");
});

app.listen(8000, function() {
    console.log("Server atarted on port 8000");
});