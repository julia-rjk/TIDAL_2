const PasswordInput = require('../Model/PasswordInput')

class PasswordInputView {
    constructor(passwordInput){
        if(passwordInput instanceof PasswordInput) {
            this.passwordInput = passwordInput;
        }
    }

    html() {
        if(this.passwordInput !== null && this.passwordInput !== undefined)
            return `<input type='password' id='${this.passwordInput.id}' `+
                `name='${this.passwordInput.name ?? "'"}' ` +
                `placeholder='${this.passwordInput.placeholder ?? "'"}' ` +
                `minLength='${this.passwordInput.minLength ?? "'"}' ` +
                `maxLength='${this.passwordInput.maxLength ?? "'"}' ` +
                `${this.passwordInput.disabled ? " disabled " : "'"}' ` +
                `required='${this.passwordInput.required}'>`
    }
}

module.exports = PasswordInputView;