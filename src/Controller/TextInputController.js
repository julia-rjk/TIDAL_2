const TextInput = require("../Model/TextInput");

class TextInputController{
    constructor( name, placeholder, min, max, isEnabled, isRequired ) {
        console.log( typeof(name), typeof(placeholder), typeof(min), typeof(max), typeof(isEnabled), typeof(isRequired))

        // On vérifie si name et placeholder sont des string
        // Si min et max sont des nombres
        // Si isEnable et isRequired sont des booléens
        if(typeof(name) != "string" || typeof(isRequired) != 'boolean' || typeof(isEnabled) != 'boolean' || typeof(min) != 'number' || typeof(max) != 'number') return -1
        this.textInput = new TextInput( name, placeholder, min, max, isEnabled, isRequired )
        return this.textInput;
    }

    getTextInput(){
        return this.textInput;
    }


}

module.exports = TextInputController;