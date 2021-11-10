const Label = require("../Model/Label");

class LabelController{
    constructor(  name, value, placeholder ) {
        // On vérifie si name et placeholder sont des string
        // Si min et max sont des nombres
        // Si isEnable et isRequired sont des booléens
        if(typeof(name) != "string" ) { return -1}
        else{
            this.Label = new Label( name, value, placeholder )
            return this.Label;
        }
    }

    getLabel(){
        return this.Label;
    }


}

module.exports = LabelController;