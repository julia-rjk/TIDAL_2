# TIDAL - Projet Framework 

## Installation

### Mise en place de postgresql
```
sudo apt-get install postgresql
sudo service postgresql start
sudo -u postgres
psql
CREATE USER <your_username>
CREATE DB <your_db_name>
GRANT ALL PRIVILEGES ON DATABASE <your_db_name> TO <your_username>
``` 

## Utilisation

```
node src/index.js
```

## Gestion du projet

### Explication du projet
* Objectifs : 
    * Permettre d'automatiser la création du formulaire
    * Géneration d'HTML
    * Création automatique de la base de donnée
    * Mise en place des routes pour pousser les données en BDD
    * Suivre le modèle MVC

* Pourquoi ce choix ? : 
    * NodeJS permet de facilier la création d'un côté serveur et client, ayant lui-même un vaste choix en terme de librairies qui nous permettent d'aboutir à notre projet.
    * Utilisation du JSON qui est un type de donnée facilement manipulable notamment avec NodeJS

* Autres choix possibles : 
    * Mise en place en TypeScript
    * Créer un composant Angular qui pourra être utilisé et configurer pour générer un formulaire personnalisé.


### Conception
* Fournir au framework les données
	* types d'input et validateurs associés
	* format JSON
* Classes JS pour chaque input
* Validateurs définis en JS reliés aux input
* Génération de l'HTML en fonction des différents input

### Modèles : 

---
Obligatoire : 
* Form ( name, action,  method )
* TextInput ( name, placeholder, minLength, maxLength, disabled, required )
* PasswordInput ( name, placeholder, minLength, maxLength, disabled, required )
* MailInput ( name, placeholder, minLength, maxLength, disabled, required  )

* TextAreaInput ( name, placeholder, rows, cols, minLength, maxLength, disabled, required )
* LabelInput ( name, value, placeholder)
* SelectInput ( name, options = [ OptionInput ] )
* OptionInput ( selectID (?), name, value)

---
Facultatif : 
* RangeInput ( name, value  ) // <input type="range" id="a" name="a" value="50">
* NumberInput ( name, value )
* DataListInput ( name, list = [ OptionInput ])
* https://www.w3schools.com/tags/tag_input.asp

### Cadre d'utilisation

* Implémentation dans un container nodeJS
* Librairie nodeJS

### Répartition des rôles

La répartition des rôles s'est fait de manière plutôt agile. 
Ceux qui maîtrisait le plus les compétences en JS / NodeJS se chargaient 
de définir le cadre du projet.
Nom | Rôle
------ | ------
Angelo | Mise en place des controllers et View, aide à la conception
Bastien | Amélioration des controllers, aide à la conception
Guillaume | Amélioration des Views et mise en place des tests, aide à la conception
Julia  | Gestion du projet, modèle MVC, aide à la conception


### Problèmes rencontrés
* Technique : 
    * Changement des techniques utilisés dans le projet passage du TypeScript en NodeJS

* Gestion du projet : 
    *

### Résulat final
* Ce qui fonctionne :
    * Le serveur express avec des endpoints
    * Création de formulaire
    * Génération de fichier html par formulaire créée
    * Création d'une table en base de données prenant les champs du formulaires et dont le nom est celui du formulaire
    * Ajout des données dans les tables grâce à un bouton submit ajouté automatiquement à chaque formulaire
* Améliorations possibles
    * Création de formulaire par requête
    * Génération de code javascript pour ajouter des validations poussés (avec des regex etc...)

