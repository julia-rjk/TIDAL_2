const TextAreaInput = require('../Model/TextAreaInput')

class TextAreaInputView {
    constructor(textAreaInput){
        if(textAreaInput instanceof TextAreaInput) {
            this.textAreaInput = textAreaInput;
        }
    }

    html() {
        if(this.textAreaInput !== null && this.textAreaInput !== undefined)
            return `<textarea id='${this.textAreaInput.id}' `+
                `name='${this.textAreaInput.name ?? "'"}' ` +
                `placeholder='${this.textAreaInput.placeholder ?? "'"}' ` +
                `minLength='${this.textAreaInput.minLength ?? "'"}' ` +
                `maxLength='${this.textAreaInput.maxLength ?? "'"}' ` +
                `rows='${this.textAreaInput.rows ?? "'"}' ` +
                `cols='${this.textAreaInput.cols ?? "'"}' ` +
                `${this.textAreaInput.disabled ? " disabled " : "'"}' ` +
                `required='${this.textAreaInput.required}'></textarea>` 
    }
}

module.exports = TextAreaInputView;