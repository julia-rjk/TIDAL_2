
const path = require("path");
var express = require('express');
// const Database = require("../../Model/Database");


// db = new Database('localhost', 5432 , 'postgres', 'postgres', 'framework', form)

var app = express();
app.use(express.json());
app.use(express.urlencoded( { extended: false } )); // this is to handle URL encoded data
app.use(express.static(path.join(__dirname, "examples")));


app.get('/', function(request, response) {
    console.log("TEST")
    // response.sendFile(path.join(__dirname, "examples") + "/GenerateFormExample.html")
});
app.get('/example', function(request, response) {
    response.sendFile(path.join(__dirname, "..") + "/newfile.html")
});
app.post('/', function(request, response) {
    // Appel de la base de donnée
    // Envoie des données du formulaires
    // db.addValues(request.body.json)
});



var server = app.listen(8081, function () {
   console.log("Example app listening at http://%s:%s", 'localhost', 8081)
})
