
const path = require("path");
var express = require('express');


const ModuleDb = require("./db")

var app = express();
app.use(express.json());
app.use(express.urlencoded( { extended: false } )); // this is to handle URL encoded data
app.use(express.static(path.join(__dirname, "examples")));


app.post('/connexion', function(request, response) {
    // Appel de la base de donnée
    // Envoie des données du formulaires
    ModuleDb.DB.addValues(request.body)
});



var server = app.listen(8081, function () {
   console.log("Example app listening at http://%s:%s", 'localhost', 8081)
})
