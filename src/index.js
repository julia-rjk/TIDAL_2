const FormController = require("./Controller/FormController");
const TextInputController = require("./Controller/TextInputController");
const Form = require("./Model/Form");
const TextInput = require("./Model/TextInput");
const FormView = require("./View/FormView");

function main(){
    let form = new FormController("Nom", "/index.php", "GET");

    let formview = new FormView(form)
    let formElement = new TextInputController("name","test",10,100,true,true)
    form.addInput(formElement)
    console.log(formview.generateFile())
}

main()