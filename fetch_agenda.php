<?php
// Connexion à la db
$conn = new mysqli('localhost', 'root', '', 'agenda_db');

// Vérifier la connexion
if ($conn->connect_error) {
    die("Erreur de connexion: " . $conn->connect_error);
}

$type = $_GET['type'];

// Sélection des devoirs en fonction du type d'agenda
$sql = "SELECT * FROM agenda WHERE type='$type' ORDER BY date ASC";
$result = $conn->query($sql);

$devoirs = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $devoirs[] = $row;
    }
}

echo json_encode($devoirs);

$conn->close();
?>
