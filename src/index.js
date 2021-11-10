const FormController = require("./Controller/FormController");
const TextInputController = require("./Controller/TextInputController");
const FormView = require("./View/FormView");
const LabelController = require("./Controller/LabelController");
const MailInputController = require("./Controller/MailInputController");
const PasswordInputController = require("./Controller/PasswordInputController");
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
app.get('/example', function(request, response) {
    response.sendFile(path.join(__dirname, "..") + "/newfile.html")
});
app.post('/', function(request, response) {
    console.log(request.body)
    // Appel de la base de donnée
    // Envoie des données du formulaires
    db.addValues(request.body)
});

app.get('/examples/:example_file_url', function(request, response) {
    let file_location = request.params.example_file_url;
    response.sendFile(path.join(__dirname, "examples/") + file_location)
});


function createForm(){
    // A remplir un exemple de formulaire
    let form = new FormController("Nom", "/", "post", 'exemple1.html');

    if(form.name != undefined){
            form.addInput(new TextInputController("TextInput","test",10,100,true,true))
            form.addInput(new LabelController("Label","test","test"))
            form.addInput(new MailInputController("MailInput","test",10,100,false,true))
            form.addInput(new PasswordInputController("Password","test",10,100,false,true))
            // form.addInput(new TextAreaInput("516763","test",10,100,true,true))
            let formView = new FormView(form)
            formView.generateFile() 
            // init de la base
            
            db.generateDatabase(form)
    }
    
   

}


var server = app.listen(8081, function () {
    createForm();
   db = new Database('localhost', 5432 , 'postgres', 'postgres', 'framework')
   console.log("Example app listening at http://%s:%s", 'localhost', 8081)
})
