const LabelInput = require("../Model/LabelInput");

class LabelInputController{
    constructor(  name, value, placeholder ) {
        // On vérifie si name et placeholder sont des string
        // Si min et max sont des nombres
        // Si isEnable et isRequired sont des booléens
        if(typeof(name) != "string" ) { return -1}
        else{
            this.LabelInput = new LabelInput( name, value, placeholder )
            return this.LabelInput;
        }
    }

    getLabelInput(){
        return this.LabelInput;
    }


}

module.exports = LabelInputController;