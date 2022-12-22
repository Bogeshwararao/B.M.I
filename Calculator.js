const express = require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/Calculator", function(req , res){
    res.sendFile(__dirname + "/Calculator.html");
});

app.post("/Calculator", function(req , res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("your bmi is "+ bmi);
});

app.listen(6060, function(){
    console.log("server running");
});