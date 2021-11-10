const MailInput = require('../Model/MailInput')

class MailInputView {
    constructor(mailInput){
        if(mailInput instanceof MailInput) {
            this.mailInput = mailInput;
        }
    }

    html() {
        if(this.mailInput !== null && this.mailInput !== undefined)
            return `<input type='mail' id='${this.mailInput.id}' `+
                `name='${this.mailInput.name ?? "'"}' ` +
                `placeholder='${this.mailInput.placeholder ?? "'"}' ` +
                `minLength='${this.mailInput.minLength ?? "'"}' ` +
                `maxLength='${this.mailInput.maxLength ?? "'"}' ` +
                `${this.mailInput.disabled ? " disabled " : "'"}' ` +
                `required='${this.mailInput.required}'>`
    }
}

module.exports = TextInputView;