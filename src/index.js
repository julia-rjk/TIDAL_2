const FormController = require("./Controller/FormController");
const TextInputController = require("./Controller/TextInputController");
const FormView = require("./View/FormView");

function main(){

    
    let form = new FormController("Nom", "/index.php", "get");
    if(form.name != undefined){
        let formView = new FormView(form)
        if(formView.name != -1){
            let formElement = new TextInputController("516763","test",10,100,true,true)
            console.log(formElement)
            if(formElement.name != undefined){
                form.addInput(formElement)
                formView.generateFile()
            }else console.error("error")
        }
    }

}

main()