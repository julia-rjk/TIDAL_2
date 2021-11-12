const TextInput = require("../Model/TextInput");

class TextInputController{
    constructor( name, placeholder, min, max, disabled, required ) {
        // On vérifie si name et placeholder sont des string
        // Si min et max sont des nombres
        // Si isEnable et isRequired sont des booléens
        if(typeof(name) != "string" || typeof(required) != 'boolean' || typeof(disabled) != 'boolean' || typeof(min) != 'number' || typeof(max) != 'number') {
            return -1
        }
        else{
            this.textInput = new TextInput( name, placeholder, min, max, disabled, required )
            return this.textInput;
        }
    }

    getTextInput(){
        return this.textInput;
    }


}

module.exports = TextInputController;