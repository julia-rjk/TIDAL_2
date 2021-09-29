
class Form {
    constructor(name, action, method) {
        this.name = name;
        this.action = action;
        this.method = method;
        this.inputs = []
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
        this.inputs.push(input)
    }
}




module.exports = Form;