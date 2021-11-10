const LabelInput = require('../Model/LabelInput')

class LabelInputView{
    constructor(labelInput){
        if(labelInput instanceof LabelInput) {
            this.labelInput = labelInput;
        }
    }

    html() {
        if(this.labelInput !== null && this.labelInput !== undefined)
            return `<label `
                `name='${this.labelInput.name ?? "'"}' ` +
                `placeholder='${this.labelInput.placeholder ?? "'"}' ` + `>` + this.labelInput.value +"</label>"
    }
}

module.exports = LabelInputView;