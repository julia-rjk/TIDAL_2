class SelectInput{
    static NB_CREATED = 0;
    static ID_PREFIX = "selectInput";
    constructor ( name ){
        this.id = TextInput.ID_PREFIX + (++TextInput.NB_CREATED).toString();
        this.name = name;
        this.options = []
    }

    addOptions(option){
        this.options.push(option)
    }
}

module.exports = SelectInput