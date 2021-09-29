const TextInputView = require("./TextInputView");
var fs = require('fs');
class FormView{
    constructor(form){

        this.form = form;
    }

    getHTML(){
        let formHTML = "<form>"
        for (let i in this.form.getInputs()) {

            let type = this.form.inputs[i].constructor.name;
            switch(type){
                case 'TextInput':
                    formHTML += new TextInputView().html(this.form.inputs[i])
                default:
                    formHTML += ""
            }
           
        }
        formHTML += "</form>"
        return formHTML
    }

    generateFile(){
        fs.writeFile('newfile.html', this.getHTML(), function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
    }
}



module.exports = FormView;