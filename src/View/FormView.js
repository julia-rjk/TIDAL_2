const TextInputView = require("./TextInputView");
const TextAreaInputView = require("./TextAreaInputView");
const SelectInputView = require("./SelectInputView");
const PasswordInputView = require("./PasswordInputView");
const MailInputView = require("./MailInputView");
const LabelInputView = require("./LabelInputView");
var fs = require('fs');

class FormView {

    constructor(formController) {
        this.form = formController;
    }

    getHTML() {
        let formHTML = "<form name='" + this.form.name + "' action='" + this.form.action + "' method='" + this.form.method + "'>"


        for (let inputController of this.form.inputs) {

            let type = inputController.constructor.name;

            switch (type) {
                case 'TextInput':
                    formHTML += new TextInputView(inputController).html();
                    break;
                case 'TextAreaInput':
                    formHTML += new TextAreaInputView(inputController).html();
                    break;
                case 'SelectInput':
                    formHTML += new SelectInputView(inputController).html();
                    break;
                case 'PasswordInput':
                    formHTML += new PasswordInputView(inputController).html();
                    break;
                case 'MailInput':
                    formHTML += new MailInputView(inputController).html();
                    break;
                case 'Label':
                    formHTML += new LabelInputView(inputController).html();
                    break;
                default:
                    formHTML += ""
            }

        }
        formHTML += "</form>"
        return formHTML
    }

    generateFile() {
        fs.writeFile('newfile.html', this.getHTML(), function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    }
}



module.exports = FormView;