const FormController = require("../Controller/FormController");
const TextInputController = require("../Controller/TextInputController");
const FormView = require("../View/FormView");

function createForm() {
    //Création du formulaire
    let formController = new FormController("myForm", "/", "post");

    //Création des input
    let nomInput = new TextInputController("nom", "Votre nom", 5, 30, true, false);
    let prenomInput = new TextInputController("prenom", "Votre prénom", 5, 30, true, false);

    //Ajout des input
    formController.addInput(nomInput);
    formController.addInput(prenomInput);

    //Création de la vue
    let formView = new FormView(formController);
    
    //Récupération de l'html
    formView.generateFile();
}

createForm()