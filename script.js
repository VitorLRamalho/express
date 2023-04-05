const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, World!</h1>");
});

app.listen(8081, function() {
    console.log("Server started on http://localhost:8081/");
});