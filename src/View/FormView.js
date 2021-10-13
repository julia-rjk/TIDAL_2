const TextInputView = require("./TextInputView");
var fs = require('fs');
const Form = require("../Model/Form");
class FormView{
    constructor(form){
        if(form instanceof Form) {
            this.htmlElement = document.createElement('form');
            for(let item of form.inputs) {
                switch(item.constructor.name){
                    case 'TextInput':
                        this.htmlElement.addChild(new TextInputView(item).htmlElement);
                    case 'TextAreaInput':
                        this.htmlElement.addChild(new TextAreaInput(item).htmlElement);
                    case 'SelectInput':
                        this.htmlElement.addChild(new SelectInput(item).htmlElement);
                    case 'PasswordInput':
                        this.htmlElement.addChild(new PasswordInputView(item).htmlElement);
                    case 'MailInput':
                        this.htmlElement.addChild(new MailInputView(item).htmlElement);
                    case 'Label':
                        this.htmlElement.addChild(new LabelView(item).htmlElement);
                    default:
                        // ...
                }
            };
        }
    }

    getHTML(){
        return this.htmlElement.innerHtml;
    }

    generateFile(){
        fs.writeFile('newfile.html', this.getHTML(), function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
    }
}



module.exports = FormView;