const OptionInputController = require("../Model/OptionInputController");

class OptionInputController{
    constructor( name, value) {
        // On vérifie si name et value sont des string
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