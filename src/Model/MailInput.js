class MailInput{
    static NB_CREATED = 0;
    static ID_PREFIX = "mailInput";
    constructor( name, placeholder, minLength, maxLength, disabled, required  ){
        this.id = TextInput.ID_PREFIX + (++TextInput.NB_CREATED).toString();
        this.name = name;
        this.placeholder = placeholder;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.disabled = disabled;
        this.required = required;
    }
}

module.exports = MailInput