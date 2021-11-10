class OptionInput{
    static NB_CREATED = 0;
    static ID_PREFIX = "optionInput";
    constructor( name, value){
        this.id = OptionInput.ID_PREFIX + (++OptionInput.NB_CREATED).toString();
        this.name = name;
        this.value = value;
    }
}

module.exports = OptionInput