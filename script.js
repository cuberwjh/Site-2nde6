// Charger les agendas au chargement de la page
window.onload = function() {
    chargerAgenda('agenda-liste', 'general');
    chargerAgenda('agenda-chinoise', 'chinoise');
    chargerAgenda('agenda-bresilienne', 'bresilienne');
    chargerAgenda('agenda-americaine', 'americaine');
};

// Fonction pour charger un agenda spécifique depuis le serveur
function chargerAgenda(idElement, type) {
    fetch('fetch_agenda.php?type=' + type)
    .then(response => response.json())
    .then(data => {
        const agendaElement = document.getElementById(idElement);
        agendaElement.innerHTML = '';  // Vider la liste avant de la remplir
        data.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task.date}: ${task.matiere} - <a href="${task.lien}" target="_blank">${task.lien}</a>`;
            agendaElement.appendChild(li);
        });
    });
}

// Ajouter un nouveau devoir pour chaque agenda
['general', 'chinoise', 'bresilienne', 'americaine'].forEach(type => {
    const formId = `ajouter-devoir-${type}`;
    document.getElementById(formId).addEventListener('submit', function(event) {
        event.preventDefault();
        const matiere = document.getElementById(`task-${type}`).value;
        const date = document.getElementById(`date-${type}`).value;
        const url = document.getElementById(`url-${type}`).value;

        // Envoyer les données en AJAX
        fetch('ajouter_devoir.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ matiere, date, url, type })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Devoir ajouté avec succès !');
                chargerAgenda(`agenda-${type}`, type);
            } else {
                alert('Erreur lors de l\'ajout du devoir.');
            }
        });
    });
});
