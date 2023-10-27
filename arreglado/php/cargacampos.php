<?php
$mysqli = new mysqli("localhost", "registros", "registros", "registros");

$sql = "SHOW COLUMNS FROM ".$_GET['tabla'];

$result = $mysqli -> query($sql);
while ($row = $result -> fetch_array()) {
    echo '<input
    type ="checkbox"
    value="'.$row[0].'"
    name = "seleccionacampos">'.$row[0].'<br>';
}




?>