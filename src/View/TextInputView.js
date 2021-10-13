const TextInput = require('../Model/TextInput');
class TextInputView{
    constructor(textInput){
        if(textInput instanceof TextInput) {
            this.htmlElement = document.createElement("input");
            this.htmlElement.setAttribute("type", "text");
            this.htmlElement.setAttribute("id", textInput.id);
            this.htmlElement.setAttribute("name", textInput.name);
            this.htmlElement.setAttribute("placeholder", textInput.placeholder);
            this.htmlElement.setAttribute("maxLength", textInput.maxLength);
            this.htmlElement.setAttribute("minLength", textInput.minLength);
            this.htmlElement.setAttribute("disabled", textInput.disabled);
            this.htmlElement.setAttribute("required", textInput.required);
        }
    }

    html() {
        return this.htmlElement.innerHTML;
    }
}

module.exports = TextInputView;