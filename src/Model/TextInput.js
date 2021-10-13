class TextInput{
    NB_ELEMENTS_CREATED = 0;
    ID_PREFIX = "textInput";
    constructor( name, placeholder, minLength, maxLength, disabled, required ){
        this.id = this.ID_PREFIX + (++this.NB_ELEMENTS_CREATED).toString();
        this.name = name;
        this.placeholder = placeholder;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.disabled = disabled;
        this.required = required;
    }
}

module.exports = TextInput