const Database = require("../../Model/Database");

module.exports = Object.freeze({
    DB: new Database('localhost', 5432 , 'postgres', 'postgres', 'framework')
});