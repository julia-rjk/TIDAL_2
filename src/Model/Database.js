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
        for(let item of this.form.inputs){
            switch(item.constructor.name){
                case 'TextInput':
                    this.modelDB[item.name] = "character varying(200)"
                case 'TextAreaInput':
                    this.modelDB[item.name] = "character varying(200)"
                case 'SelectInput':
                    this.modelDB[item.name] = "character varying(200)"
                case 'PasswordInput':
                    this.modelDB[item.name] = "character varying(200)"
                case 'MailInput':
                    this.modelDB[item.name] = "character varying(200)"
                case 'Label':
                    this.modelDB[item.name] = "character varying(200)"
                default:
                    this.modelDB[item.name] = "character varying(200)"
            }
        }
        let query = ` CREATE TABLE ${this.form.name} (`
        let i = 0;
        for(let value of Object.keys(this.modelDB)){
            query += ` ${value} ${this.modelDB[value]}`
            i++;
            if(i < Object.keys(this.modelDB).length)query += `,`
        }
        query += `);`
        console.log(query)
        return this.client.query(query).then(res => {
            console.log('Table is successfully created');
        })
        .catch(err => {
            console.error(err);
            return err;
        })
        .finally(() => {
            client.end();
            return 0;
        });
    }

    addValues(values){

        let query = `INSERT INTO ${this.form.name} (`

        for(let value in Object.keys(this.modelDB)){
            query += ` ${value} ${this.modelDB[value]}`
        }

        query += `VALUES(`
        for(let value in values){
            query += ` '${value}''`
        }

        return client.query(query).then(res => {
            console.log('Values successfully added');
        })
        .catch(err => {
            console.error(err);
            return err;
        })
        .finally(() => {
            client.end();
            return 0;
        });
    }

}



module.exports = Database;