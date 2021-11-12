const TextAreaInput = require("../Model/TextAreaInput");

class TextAreaInputController{
    constructor( name, placeholder, rows, cols, minLength, maxLength, disabled, required ) {
        // On vérifie si name et placeholder sont des string
        // Si rows, cols, minLength et maxLength sont des nombres
        // Si isEnable et required sont des booléens
        if(typeof(name) != "string" || typeof(required) != 'boolean' || typeof(disabled) != 'boolean' || typeof(minLength) != 'number' || typeof(maxLength) != 'number'
        || typeof(rows) != 'number' || typeof(cols) != 'number' ) {
            return -1
        }else{
            this.textAreaInput = new TextAreaInput( name, placeholder, rows, cols, minLength, maxLength, disabled, required )
            return this.textAreaInput;
        }
    }

    getTextAreaInput(){
        return this.textAreaInput;
    }


}

module.exports = TextAreaInputController;