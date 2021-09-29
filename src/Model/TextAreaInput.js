class TextAreaInput{
    constructor ( name, placeholder, rows, cols, min, max, isEnabled, isRequired ){
        this.name = name;
        this.placeholder = placeholder;
        this.min = min;
        this.max = max;
        this.isEnabled = isEnabled;
        this.isRequired = isRequired;
        this.rows = rows;
        this.cols = cols;
    }
}

module.exports = TextAreaInput