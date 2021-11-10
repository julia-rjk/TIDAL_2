class Label{
    static NB_CREATED = 0;
    static ID_PREFIX = "label";
    constructor( name, value, placeholder){
        this.id = Label.ID_PREFIX + (++Label.NB_CREATED).toString();
        this.name = name;
        this.placeholder = placeholder;
        this.value = value;
    }
}

module.exports = Label