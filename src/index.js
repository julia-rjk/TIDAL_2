const FormController = require("./Controller/FormController");
const TextInputController = require("./Controller/TextInputController");
const FormView = require("./View/FormView");
const LabelInputController = require("./Controller/LabelInputController");
const path = require("path");
var express = require('express');
const Database = require("./Model/Database");
const TextAreaInput = require("./Model/TextAreaInput");
var app = express();
app.use(express.json());
app.use(express.urlencoded( { extended: false } )); // this is to handle URL encoded data
app.use(express.static(path.join(__dirname, "examples")));
var db;

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, "examples") + "/GenerateFormExample.html")
});

app.post('/', function(request, response) {
    // Appel de la base de donnée
    // Envoie des données du formulaires
    //db.addValues(request.body.json)
});


function createForm(){
    // A remplir un exemple de formulaire
    let form = new FormController("Nom", "/", "post");

    if(form.name != undefined){
        let formView = new FormView(form)
        if(formView.name != -1){
            form.addInput(new TextInputController("516763","test",10,100,true,true))
            form.addInput(new LabelInputController("test","test","test"))
            form.addInput(new MailInputController("516763","test",10,100,true,true))
            form.addInput(new PasswordInputController("516763","test",10,100,true,true))
            form.addInput(new TextAreaInput("516763","test",10,100,true,true))
            formView.generateFile()
            }else console.error("error")
    }
    
    // init de la base
    db = new Database('localhost', 5432 , 'username', 'password', 'dbname', form)

}


var server = app.listen(8081, function () {
    createForm();

   console.log("Example app listening at http://%s:%s", 'localhost', 8081)
})
