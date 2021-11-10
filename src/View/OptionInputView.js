const OptionInput = require('../Model/OptionInput')

class OptionInputView{
    constructor(optionInput){
        if(optionInput instanceof OptionInput) {
            this.optionInput = optionInput;
        }
    }

    html() {
        if(this.optionInput !== null && this.optionInput !== undefined)
            return `<option `
                `name='${this.optionInput.name ?? "'"}' ` +
                `placeholder='${this.optionInput.placeholder ?? "'"}' ` + `>` + this.optionInput.value +"</option>"
    }
}

module.exports = OptionInputView;