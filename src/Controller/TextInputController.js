const TextInput = require("../Model/TextInput");

class TextInputController{
    constructor(name, action, method) {
        this.name = name;
        this.action = action;
        this.method = method;
        this.inputs = []

        

        this.textInput = new TextInput(name, action, method)
    }


}