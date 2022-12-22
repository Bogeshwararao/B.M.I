const express = require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/Calculator", function(req , res){
    res.sendFile(__dirname + "/Calculator.html");
});

app.post("/Calculator", function(rep , res){
    var weight1 = parseFloat(req.body.weight);
    var height1 = parseFloat(req.body.height);

    var bmi = weight1/(height1*height1);

    res.send("your bmi is "+ bmi);
});

app.listen(7070, function(){
    console.log("server running");
});