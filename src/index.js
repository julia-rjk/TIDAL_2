const FormController = require("./Controller/FormController");
const TextInputController = require("./Controller/TextInputController");
const Form = require("./Model/Form");
const TextInput = require("./Model/TextInput");
const FormView = require("./View/FormView");

function main(){

    
    let form = new FormController("Nom", "/index.php", "GET");
    if(form){
        let formview = new FormView(form)
        let formElement = new TextInputController(516763,"test",10,100,true,true)

        if(formElement){


            form.addInput(formElement)
            formview.generateFile()
        }else console.log("error")

    }else{
        console.log("Error")
    }

}

main()