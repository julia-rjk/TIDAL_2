const TextAreaInput = require('../Model/TextAreaInput');
class TextAreaInputView{
    constructor(textAreaInput, formId){
        if(textAreaInput instanceof TextAreaInput) {
            this.htmlElement = document.createElement("textarea");
            this.htmlElement.setAttribute("id", textAreaInput.id);
            this.htmlElement.setAttribute("name", textAreaInput.name);
            this.htmlElement.setAttribute("rows", textAreaInput.rows);
            this.htmlElement.setAttribute("cols", textAreaInput.cols);
            this.htmlElement.setAttribute("placeholder", textAreaInput.placeholder);
            this.htmlElement.setAttribute("maxLength", textAreaInput.maxLength);
            this.htmlElement.setAttribute("minLength", textAreaInput.minLength);
            this.htmlElement.setAttribute("disabled", textAreaInput.disabled);
            this.htmlElement.setAttribute("required", textAreaInput.required);
            this.htmlElement.setAttribute("form", formId);
        }
    }

    html() {
        return this.htmlElement.innerHTML;
    }
}

module.exports = TextAreaInputView;