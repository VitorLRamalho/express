const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, World!!!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: Vitor.Ramalho@teste.com")
})

app.get("/about", function(req, res){
    res.send("<h1>Vitor Luiz Ramalho</h1> <p>Hello My name is Vitor Luiz Ramalho. I am a programer and enthusiast in technology</p>")
})

app.listen(8081, function() {
    console.log("Server started on http://localhost:8081/");
});