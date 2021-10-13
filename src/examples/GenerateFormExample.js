const TextInput = require('../Model/TextInput')
const Form = require('../Model/Form')
const FormView = require('../View/FormView')

function run() {
    let textInput1 = new TextInput("first input", "first placeholder", 20, 40, false, true);
    let textInput2 = new TextInput("second input", "second placeholder", 20, 40, true, false);
    
    let form = new Form("form", "/index.php", "get");
    form.addInput(textInput1);
    form.addInput(textInput2)
    
    let formView = new FormView(form);
    
    console.log(formView);
}

window.onload = run;
