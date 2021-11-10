const SelectInput = require("../Model/SelectInput");

class SelectInputController{
    constructor( name ) {
        // On vérifie si name et placeholder sont des string
        // Si min et max sont des nombres
        // Si isEnable et isRequired sont des booléens
        if(typeof(name) != "string" ) { 
            return -1
        }else{
            this.selectInput = new SelectInput( name )
            return this.selectInput;
        }
    }

    getSelectInput(){
        return this.selectInput;
    }

    addOption(option){
        this.selectInput.addOption(option)
    }


}

module.exports = SelectInputController;