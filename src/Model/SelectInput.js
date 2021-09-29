class SelectInput{
    constructor ( name ){
        this.name = name;
        this.options = []
    }

    addOptions(option){
        this.options.push(option)
    }
}

module.exports = SelectInput