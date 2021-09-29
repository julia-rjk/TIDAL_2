
class Form {
    constructor(name, action, method) {
        this.name = name;
        this.action = action;
        this.method = method;
        this.inputs = []
    }

    addInput(input){
        this.inputs.push(input)
    }
}




module.exports = Form;