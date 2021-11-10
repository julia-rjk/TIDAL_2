class LabelInput{
    static NB_CREATED = 0;
    static ID_PREFIX = "label";
    constructor( name, value, placeholder){
        this.id = TextInput.ID_PREFIX + (++TextInput.NB_CREATED).toString();
        this.name = name;
        this.placeholder = placeholder;
        this.value = value;
    }
}

module.exports = LabelInput