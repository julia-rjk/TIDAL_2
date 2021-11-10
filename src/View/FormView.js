const TextInputView = require("./TextInputView");
const TextAreaInputView = require("./TextAreaInputView");
const SelectInputView = require("./SelectInputView");
const PasswordInputView = require("./PasswordInputView");
const MailInputView = require("./MailInputView");
const LabelInputView = require("./LabelInputView");
var fs = require('fs');
class FormView{
    constructor(form){
        this.form = form;
    }

    getHTML(){
        let formHTML = "<form name='"+ this.form.name+"' action='"+ this.form.action+"' method='"+ this.form.method+"'>"

        for (let i in this.form.inputs) {

            let type = this.form.inputs[i].constructor.name;

            
            switch(type){
                case 'TextInput':
                    formHTML += new TextInputView().html(this.form.inputs[i])
                case 'TextAreaInput':
                    formHTML += new TextAreaInputView().html(this.form.inputs[i])
                case 'SelectInput':
                    formHTML += new SelectInputView().html(this.form.inputs[i])
                case 'PasswordInput':
                    formHTML += new PasswordInputView().html(this.form.inputs[i])
                case 'MailInput':
                    formHTML += new MailInputView().html(this.form.inputs[i])
                case 'Label':
                    formHTML += new LabelInputView().html(this.form.inputs[i])
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