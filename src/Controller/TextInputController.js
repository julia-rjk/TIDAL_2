const TextInput = require("../Model/TextInput");

class TextInputController{
    constructor( name, placeholder, min, max, isEnabled, isRequired ) {

        // VERIFIER SI NAME PLACEHOLDER STRING

        // VERIFIER SI MIN ET MAX SONT DES INT OU FLOAT

        // VEIRFIER ISENABLE ET ISREQUIRED SONT DES BOOL
        

        this.textInput = new TextInput( name, placeholder, min, max, isEnabled, isRequired )

        return this.textInput;
    }

    getTextInput(){
        return this.textInput;
    }


}

module.exports = TextInputController;