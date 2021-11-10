
class Form {
    static NB_CREATED = 0;
    static ID_PREFIX = "form";
    constructor(name, action, method, filename) {
        this.id = Form.ID_PREFIX + (++Form.NB_CREATED).toString();
        this.name = name;
        this.action = action;
        this.method = method;
        this.filename = filename
        this.inputs = []
    }

    addInput(input){
        this.inputs.push(input)
    }
}




module.exports = Form;