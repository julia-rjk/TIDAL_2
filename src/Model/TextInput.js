class TextInput{
    NB_CHILD = 0;
    ID_PREFIX = "textinput";
    constructor( name, placeholder, minLength, maxLength, disabled, required ){
        this.id = (++this.NB_CHILD).toString() + this.ID_PREFIX;
        this.name = name;
        this.placeholder = placeholder;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.disabled = disabled;
        this.required = required;
    }
}

module.exports = TextInput