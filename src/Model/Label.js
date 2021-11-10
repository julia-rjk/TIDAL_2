class Label {
    static NB_CREATED = 0;
    static ID_PREFIX = "label";
    constructor(inputName, value) {
        this.id = Label.ID_PREFIX + (++Label.NB_CREATED).toString();
        this.inputName = inputName;
        this.value = value;
    }
}

module.exports = Label