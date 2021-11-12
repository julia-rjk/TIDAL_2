function submitForm() {
    console.log("submit !")
    window.location.href = "http://127.0.0.1:5500/src/examples/login/index.html";
}

window.onload = () => {
    fetch('monFichier.html')
        .then(function (response) {
            // When the page is loaded convert it to text
            return response.text()
        })
        .then(function (html) {
            // Initialize the DOM parser
            var parser = new DOMParser();

            // Parse the text
            var doc = parser.parseFromString(html, "text/html");

            //Récupération du form
            var form = doc.getElementsByTagName("form")[0];

            let conteneur = document.getElementById("conteneur-form");
            conteneur.appendChild(form);
        })
        .catch(function (err) {
            console.log('Failed to fetch page: ', err);
        });
}