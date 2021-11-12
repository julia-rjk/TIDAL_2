const Form = require("../Model/Form");

class FormController{

    form;

    constructor(name, action, method, filename){
        let methodAllowed = ['get','post','put']
        if(typeof(name) != 'string' || typeof(action) != 'string' || typeof(method)!= 'string' || methodAllowed.indexOf(method.toLowerCase()) == -1){ 
            console.error("Error when creating form, please verify parameters.")
            return -1
        }
        else{
            this.form = new Form(name, action, method, filename);
            return this.form
        }
    }


    getForm(){
        return this.form
    }
    getName() {
        return this.name;
    }
    getAction() {
        return this.action;
    }
    getMethod() {
        return this.method;
    }

    getInputs(){
        return this.inputs;
    }

    addInput(input){
        this.form.addInput(input)
    }

}

module.exports = FormController;