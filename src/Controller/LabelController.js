const Label = require("../Model/Label");

class LabelController {
    constructor(inputName, value,) {
        // On vérifie si inputName est une string
        if (typeof (inputName) != "string") { return -1 }
        else {
            this.Label = new Label(inputName, value)
            return this.Label;
        }
    }

    getLabel() {
        return this.Label;
    }


}

module.exports = LabelController;