<?php
$mysqli = new mysqli("localhost", "registros", "registros", "registros");

$sql = "SHOW COLUMNS FROM ".$_GET['tabla'];

$result = $mysqli -> query($sql);
while ($row = $result -> fetch_array()) {
    echo '<option value="'.$row[0].'">'.$row[0].'</option>';
}



?>