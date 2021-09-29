const OptionInputController = require("../Model/OptionInputController");

class OptionInputController{
    constructor( name, value) {
        // On vérifie si name et placeholder sont des string
        // Si min et max sont des nombres
        // Si isEnable et isRequired sont des booléens
        if(typeof(name) != "string" || typeof(value) != 'string' ) {
            return -1
        }
        else{
            this.optionInputController = new OptionInputController( name, value )
            return this.optionInputController;
        }
    }

    getOptionInputController(){
        return this.optionInputController;
    }


}

module.exports = OptionInputController;