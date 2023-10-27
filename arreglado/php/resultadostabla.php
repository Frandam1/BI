<?php

$mysqli = new mysqli("localhost", "registros", "registros", "registros");
$sql = $mysqli->real_escape_string($_GET["sql"]);
$result = $mysqli->query($sql);

if ($result) {
    $contador = $result->num_rows;

    echo '<p>La búsqueda ha devuelto ' . $contador . ' resultados</p>';

    echo '<table cellpadding="0" cellspacing="0" width="100%">';
    
    $row = $result->fetch_assoc();
    if ($row) {
        echo '<tr>';
        foreach ($row as $campo => $valor) {
            echo '<th>' . $campo . '</th>';
        }
        echo '</tr>';
    }

    while ($row = $result->fetch_assoc()) {
        echo '<tr>';
        foreach ($row as $valor) {
            echo '<td>' . $valor . '</td>';
        }
        echo '</tr>';
    }

    echo '</table>';
} else {
    echo '<p>Error en la consulta: ' . $mysqli->error . '</p>';
}

$mysqli->close();
?>
