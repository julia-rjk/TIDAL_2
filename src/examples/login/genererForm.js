const FormController = require("../../Controller/FormController");
const LabelController = require("../../Controller/LabelController");
const TextInputController = require("../../Controller/TextInputController");
const MailInputController = require("../../Controller/MailInputController");
const FormView = require("../../View/FormView");
const PasswordInputController = require("../../Controller/PasswordInputController");

const ModuleDb = require("./db")

function createForm() {
    //Création du formulaire
    let formController = new FormController("myForm", "http://localhost:8081/connexion", "post", "login/monFichier.html");

    //Création des input/label
    let mailInput = new MailInputController("id", "exemple@gmail.com", 5, 30, false, false);
    let mailLabel = new LabelController("id", "Identifiant")

    let passwordInput = new PasswordInputController("password", "******", 5, 20, false, true);
    let passwordLabel = new LabelController("password", "Mot de passe");

    //Ajout des input
    formController.addInput(mailLabel);
    formController.addInput(mailInput);
    formController.addInput(passwordLabel);
    formController.addInput(passwordInput);

    //Création de la vue
    let formView = new FormView(formController);
    
    //Récupération de l'html
    formView.generateFile();

    //Création de la db
    ModuleDb.DB.generateDatabase(formController)
}

createForm()