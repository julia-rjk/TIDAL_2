const TextInput = require("../Model/TextInput");

class TextInputController{
    constructor( name, placeholder, minLength, maxLength, disabled, required ) {
        // On vérifie si name et placeholder sont des string
        // Si minLength et maxLength sont des nombres
        // Si disabled et required sont des booléens
        if(typeof(name) != "string" || typeof(required) != 'boolean' || typeof(disabled) != 'boolean' || typeof(minLength) != 'number' || typeof(maxLength) != 'number') {
            return -1
        }
        else{
            this.textInput = new TextInput( name, placeholder, minLength, maxLength, disabled, required )
            return this.textInput;
        }
    }

    getTextInput(){
        return this.textInput;
    }


}

module.exports = TextInputController;