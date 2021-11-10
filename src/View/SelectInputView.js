const SelectInput = require('../Model/SelectInput')

class SelectInputView {
    constructor(selectInput){
        if(selectInput instanceof SelectInput) {
            this.selectInput = selectInput;
        }
    }

    html() {
        if(this.selectInput !== null && this.selectInput !== undefined)
            ret = `<select id='${this.selectInput.id}' `+
                `name='${this.selectInput.name ?? "'"}'>`
            for (let i in this.selectInput.options) {
                ret += `<option value="'${i.value}'">${i.text}</option>`
            }
            ret += `</select>`
            return ret
    }
}

module.exports = SelectInputView;