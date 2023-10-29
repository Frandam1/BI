<?php
include "config.php";

$sql = "SHOW COLUMNS FROM ".$_GET['tabla'];

$result = $mysqli -> query($sql);
while ($row = $result -> fetch_array()) {
    echo '<input
    type ="checkbox"
    value="'.$row[0].'"
    name = "seleccionaordenar">'.$row[0].'<br>';
}




?>