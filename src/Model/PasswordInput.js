class PasswordInput{
    static NB_CREATED = 0;
    static ID_PREFIX = "passInput";
    constructor( name, placeholder, min, max, isEnabled, isRequired ){
        this.id = TextInput.ID_PREFIX + (++TextInput.NB_CREATED).toString();
        this.name = name;
        this.placeholder = placeholder;
        this.min = min;
        this.max = max;
        this.isEnabled = isEnabled;
        this.isRequired = isRequired;
    }
}

module.exports = PasswordInput