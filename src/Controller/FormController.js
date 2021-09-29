const Form = require("../Model/Form");

class FormController{

    constructor(name, action, method){
        // VERIFIER SI NAME EGALE A STR

        // VERIFIER SI ACTION EGALE URL VALABLE
        
        // VERIFIER SI LA METHOD EST EGALE A GET OU POST ETC
        this.form = new Form(name, action, method);
        return this.form
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
        // VERIFIER l INPUT 
        this.inputs.push(input)
    }

}

module.exports = FormController;