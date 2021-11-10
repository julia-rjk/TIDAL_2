class TextAreaInput{
    static NB_CREATED = 0;
    static ID_PREFIX = "textareainput";
    constructor ( name, placeholder, rows, cols, minLength, maxLength, disabled, required ){
        this.id = TextAreaInput.ID_PREFIX + (++TextAreaInput.NB_CREATED).toString();
        this.name = name;
        this.placeholder = placeholder;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.disabled = disabled;
        this.required = required;
        this.rows = rows;
        this.cols = cols;
    }
}

module.exports = TextAreaInput