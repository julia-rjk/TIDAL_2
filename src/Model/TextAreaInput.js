class TextAreaInput{
    NB_ELEMENTS_CREATED = 0;
    ID_PREFIX = "textareaInput";
    constructor ( name, placeholder, rows, cols, minLength, maxLength, disabled, required ){
        this.id = this.ID_PREFIX + (++this.NB_ELEMENTS_CREATED).toString();
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