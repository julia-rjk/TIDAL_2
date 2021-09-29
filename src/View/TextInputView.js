class TextInputView{
    constructor(){}

    html(textInput){

        let html = '<label for="'+ textInput.name+'">'+ textInput.name+'</label><input type="text" id="'+textInput.name+'" name="'+textInput.name+'" max="'+ textInput.max+'" min="'+ textInput.min+'"'
        if( ! textInput.isEnabled) html +=" disabled"
        if( textInput.isRequired) html +=" required"
        html +=">"
        return html
    }
}

module.exports = TextInputView;