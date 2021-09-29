const { Client } = require('pg');

class Database{

    constructor(host, port , user , password , database , form){
        this.form = form;
        // Génération de la table 
        this.user= user;
        this.host= host;
        this.database= database;
        this.password= password;
        this.port= port;

        this.client = new Client({
            user: user,
            host: host,
            database: database,
            password: password,
            port: port,
        });

        this.modelDB = []
        this.client.connect();
        this.generateDatabase();
    }

    generateDatabase(){

        this.modelDB = {}
        this.modelDB[this.form.name] = "VARCHAR(50)"
        // TODO BOUCLE DES INPUTS 

        for(let item in this.form.inputs){

            switch(item.constructor.name){
                case 'TextInput':
                    this.modelDB[item.name] = "VARCHAR(50)"
                case 'TextAreaInput':
                    this.modelDB[item.name] = "VARCHAR(50)"
                case 'SelectInput':
                    this.modelDB[item.name] = "VARCHAR(50)"
                case 'PasswordInput':
                    this.modelDB[item.name] = "VARCHAR(50)"
                case 'MailInput':
                    this.modelDB[item.name] = "VARCHAR(50)"
                case 'Label':
                    this.modelDB[item.name] = "VARCHAR(50)"
                default:
                    // ...
            }

        }

        let query = ` CREATE TABLE ${this.form.name} (`

        for(let value in Object.keys(this.modelDB)){

            query += ` ${value} ${this.modelDB[value]}`

        }

        query += `);`
        
        client.query(query).then(res => {
            console.log('Table is successfully created');
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            client.end();
        });
    }

    addValues(values){

    }

}



module.exports = Database;