const FormController = require("../Controller/FormController");
const LabelController = require("../Controller/LabelController");
const TextInputController = require("../Controller/TextInputController");
const FormView = require("../View/FormView");

function createForm() {
    //Création du formulaire
    let formController = new FormController("myForm", "/", "post");

    //Création des input/label
    let nomInput = new TextInputController("nom", "Exemple: Dupont", 5, 30, true, false);
    let nomLabel = new LabelController("nom", "Votre nom")

    let prenomLabel = new LabelController("prenom", "Votre prénom")
    let prenomInput = new TextInputController("prenom", "Exemple: Jean", 5, 30, true, false);

    //Ajout des input
    formController.addInput(nomLabel);
    formController.addInput(nomInput);
    formController.addInput(prenomLabel);
    formController.addInput(prenomInput);

    //Création de la vue
    let formView = new FormView(formController);
    
    //Récupération de l'html
    formView.generateFile();
}

createForm()