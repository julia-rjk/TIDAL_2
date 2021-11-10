const MailInput = require("../Model/MailInput");

class MailInputController{
    constructor( name, placeholder, min, max, isEnabled, isRequired ) {
        // On vérifie si name et placeholder sont des string
        // Si min et max sont des nombres
        // Si isEnable et isRequired sont des booléens
        if(typeof(name) != "string" || typeof(isRequired) != 'boolean' || typeof(isEnabled) != 'boolean' || typeof(min) != 'number' || typeof(max) != 'number') {
            return -1}
        else{
            this.mailInput = new MailInput( name, placeholder, min, max, isEnabled, isRequired )
            return this.mailInput;
        }
    }

    getMailInput(){
        return this.mailInput;
    }


}

module.exports = MailInputController;