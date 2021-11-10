const Label = require('../Model/Label')

class LabelView{
    constructor(label){
        if(label instanceof Label) {
            this.label = label;
        }
    }

    html() {
        if(this.label !== null && this.label !== undefined)
            return `<label for='${this.label.name}'>${ this.label.value }</label>`
    }
}

module.exports = LabelView;