const Form = require("./Model/Form");
const FormElement = require("./Model/FormElement");
const TextInput = require("./Model/TextInput");
const FormView = require("./View/FormView");

function main(){
    let form = new Form("Nom", "/index.php", "GET");

    let formview = new FormView(form)
    let formElement = new TextInput("name","test",10,100,true,true)
    form.addInput(formElement)
    console.log(formview.generateFile())
}

main()