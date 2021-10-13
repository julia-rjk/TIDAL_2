class Form {
    NB_ELEMENTS_CREATED = 0;
    ID_PREFIX = "form";
    constructor(name, action, method) {
        this.id = this.ID_PREFIX + (++this.NB_ELEMENTS_CREATED).toString();
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