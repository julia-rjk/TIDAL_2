const Label = require('../Model/Label')

class LabelView{
    constructor(label){
        if(label instanceof Label) {
            this.label = label;
        }
    }

    html() {
        if(this.label !== null && this.label !== undefined)
            return `<label `+ 
                `name='${this.label.name ?? "'"}' ` +
                `placeholder='${this.label.placeholder ?? "'"}' ` + `>` + this.label.value +"</label>"
    }
}

module.exports = LabelView;