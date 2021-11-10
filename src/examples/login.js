// import FormController from "../Controller/FormController"
// import TextInputController  from "../Controller/TextInputController"
// import FormView  from "../View/FormView"
const FormController = require("../Controller/FormController");
const TextInputController = require("../Controller/TextInputController");
const FormView = require("../View/FormView");

function createForm() {
    //Création du formulaire
    let formController = new FormController("myForm", "/", "post");

    //Création des input
    let nomInput = new TextInputController("nom", "Votre nom", 5, 30, true, true);

    //Ajout des input
    formController.addInput(nomInput);

    //Création de la vue
    let formView = new FormView(formController);
    
    //Récupération de l'html
    let htmlGenere = formView.getHTML();
    console.log(htmlGenere)
}

createForm()