class OptionInput{
    static NB_CREATED = 0;
    static ID_PREFIX = "optionInput";
    constructor( name, value){
        this.id = TextInput.ID_PREFIX + (++TextInput.NB_CREATED).toString();
        this.name = name;
        this.value = value;
    }
}

module.exports = OptionInput