class PasswordInput{
    static NB_CREATED = 0;
    static ID_PREFIX = "passInput";
    constructor( name, placeholder, minLength, maxLength, disabled, required){
        this.id = PasswordInput.ID_PREFIX + (++PasswordInput.NB_CREATED).toString();
        this.name = name;
        this.placeholder = placeholder;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.disabled = disabled;
        this.required = required;
    }
}

module.exports = PasswordInput