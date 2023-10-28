<?php

include "config.php";


$sql = $_GET['sql']."";
$result = $mysqli -> query($sql);
$contador = 0;
while ($row = $result -> fetch_assoc()) {
    $contador++; 
}
echo '<p>La busqueda a devuelto '.$contador.' resultados</p>';
?>

<table colpadding = 0 colspacing=0 cellpadding=0 cellspacing=0 width=100% >

<?php

include "config.php";

$sql = $_GET['sql']."";
$result = $mysqli -> query($sql);
if ($row = $result -> fetch_assoc()) {
    echo '<tr>';
    foreach($row as $campo => $valor) {
        echo '<th>'.$campo.'</th>';
    }
    echo '</tr>';
}



$sql = $_GET['sql'];
$result = $mysqli -> query($sql);
while ($row = $result -> fetch_assoc()) {
    echo '<tr>';
    foreach($row as $campo => $valor) {
        echo '<td>'.$valor.'</td>';
    }
    echo '</tr>';
}



?>