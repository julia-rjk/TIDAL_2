const { Client } = require('pg');

class Database {

    constructor(host, port, user, password, database) {

        // Génération de la table 
        this.user = user;
        this.host = host;
        this.database = database;
        this.password = password;
        this.port = port;

        this.client = new Client({
            user: user,
            host: host,
            database: database,
            password: password,
            port: port,
        });
        this.client.connect();
    }

    generateDatabase(form) {
        let modelDB = {}
        for (let item of form.inputs) {
            switch (item.constructor.name) {
                case 'TextInput':
                    modelDB[item.name] = "character varying(200)"
                case 'TextAreaInput':
                    modelDB[item.name] = "character varying(200)"
                case 'SelectInput':
                    modelDB[item.name] = "character varying(200)"
                case 'PasswordInput':
                    modelDB[item.name] = "character varying(200)"
                case 'MailInput':
                    modelDB[item.name] = "character varying(200)"
                default:
                    modelDB[item.name] = "character varying(200)"
            }
        }

        //Création de la requête de création de table
        let query = ` CREATE TABLE IF NOT EXISTS ${form.name} (`
        let i = 0;
        for (let value of Object.keys(modelDB)) {
            query += ` ${value} ${modelDB[value]}`
            i++;
            if (i < Object.keys(modelDB).length) query += `,`
        }
        query += `);`
        console.log(query)

        //Retour
        return this.client.query(query).then(res => {
            console.log('Table is successfully created');
        })
            .catch(err => {
                console.error(err);
                return err;
            })
            .finally(() => {

                return 0;
            });
    }

    addValues(values) {
        let formName = values.formName
        delete values.formName

        //Création de la requête d'insertion
        let query = `INSERT INTO ${formName} (`
        let i = 0;
        for (let value of Object.keys(values)) {
            query += ` ${value}`
            i++;
            if (i < Object.keys(values).length) query += `,`
        }

        query += `) VALUES(`
        i = 0;
        for (let value of Object.keys(values)) {
            query += ` '${values[value]}'`
            i++;
            if (i < Object.keys(values).length) query += `,`
        }
        query += `);`
        console.log(query)

        //Retour 
        return this.client.query(query).then(res => {
            console.log('Values successfully added');
        })
            .catch(err => {
                console.error(err);
                return err;
            })
            .finally(() => {

                return 0;
            });
    }

}



module.exports = Database;