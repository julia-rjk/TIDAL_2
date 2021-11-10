const TextInput = require('../Model/TextInput')

class TextInputView{
    constructor(textInput){
        if(textInput instanceof TextInput) {
            this.textInput = textInput;
        }
    }

    html() {
        if(this.textInput !== null && this.textInput !== undefined)
            return `<input type='text' id='${this.textInput.id}' `+
                `name='${this.textInput.name ?? "'"}' ` +
                `placeholder='${this.textInput.placeholder ?? "'"}' ` +
                `minLength='${this.textInput.minLength ?? "'"}' ` +
                `maxLength='${this.textInput.maxLength ?? "'"}' ` +
                `${this.textInput.disabled ? "disabled" : ""} ` +
                `required='${this.textInput.required}'>`
    }
}

module.exports = TextInputView;