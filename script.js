///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        // Définir les constantes :

// Modules :
//const fs = require('fs');

// Références :
const form = document.getElementById("ajouter-un-devoir");
const texte = document.getElementById("new-task");
const date = document.getElementById("new-task-date");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        // Définir les fonctions :

function envoi_data(event) {
    tache = date.value + " - " + texte.value
    event.preventDefault()
    
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        // Programme main :

form.addEventListener("submit", envoi_data);
                                        
                                        //Récupérer la valeur
