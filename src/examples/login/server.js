
const path = require("path");
var express = require('express');


const ModuleDb = require("./db")

var app = express();
app.use(express.json());
app.use(express.urlencoded( { extended: false } )); // this is to handle URL encoded data
app.use(express.static(path.join(__dirname, "examples")));


app.post('/connexion', function(request, response) {

    if (ModuleDb.DB.addValues(request.body) == 0) {
        response.sendStatus(200);
    } else {
        //Erreur insertion
        response.sendStatus(400);
    }
    
});



var server = app.listen(8081, function () {
   console.log("Example app listening at http://%s:%s", 'localhost', 8081)
})
