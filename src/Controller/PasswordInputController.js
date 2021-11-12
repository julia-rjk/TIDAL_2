const PasswordInput = require("../Model/PasswordInput");

class PasswordInputController{
    constructor( name, placeholder, minLength, maxLength, disabled, required ) {
        // On vérifie si name et placeholder sont des string
        // Si minLength et maxLength sont des nombres
        // Si isEnable et required sont des booléens
        if(typeof(name) != "string" || typeof(required) != 'boolean' || typeof(disabled) != 'boolean' || typeof(minLength) != 'number' || typeof(maxLength) != 'number') {
            return -1
        }
        else{
            this.passwordInput = new PasswordInput( name, placeholder, minLength, maxLength, disabled, required )
            return this.passwordInput;
        }
    }

    getPasswordInput(){
        return this.passwordInput;
    }


}

module.exports = PasswordInputController;