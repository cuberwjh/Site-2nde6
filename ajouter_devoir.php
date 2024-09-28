<?php
// Connexion à la db
$conn = new mysqli('localhost', 'root', '', 'agenda_db');

// Vérifier la connexion
if ($conn->connect_error) {
    die("Erreur de connexion: " . $conn->connect_error);
}

// Récupérer les données， donc les devoirs
$data = json_decode(file_get_contents("php://input"), true);
$matiere = $data['matiere'];
$date = $data['date'];
$lien = $data['url'];
$type = $data['type'];

// Mettre dans la db
$sql = "INSERT INTO agenda (matiere, date, lien, type) VALUES ('$matiere', '$date', '$lien', '$type')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}

$conn->close();
?>
