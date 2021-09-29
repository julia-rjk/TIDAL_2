const TextAreaInput = require("../Model/TextAreaInput");

class TextAreaInputController{
    constructor( name, placeholder, rows, cols, min, max, isEnabled, isRequired ) {
        // On vérifie si name et placeholder sont des string
        // Si min et max sont des nombres
        // Si isEnable et isRequired sont des booléens
        if(typeof(name) != "string" || typeof(isRequired) != 'boolean' || typeof(isEnabled) != 'boolean' || typeof(min) != 'number' || typeof(max) != 'number'
        || typeof(rows) != 'number' || typeof(cols) != 'number' ) {
            return -1
        }else{
            this.textAreaInput = new TextAreaInput( name, placeholder, rows, cols, min, max, isEnabled, isRequired )
            return this.textAreaInput;
        }
    }

    getTextAreaInput(){
        return this.textAreaInput;
    }


}

module.exports = TextAreaInputController;