class TextInput{
    constructor( name, placeholder, min, max, isEnabled, isRequired ){
        this.name = name;
        this.placeholder = placeholder;
        this.min = min;
        this.max = max;
        this.isEnabled = isEnabled;
        this.isRequired = isRequired;
    }
}

module.exports = TextInput