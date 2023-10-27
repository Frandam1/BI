var peticion = "SELECT ";
var columnas = " * ";
var desde = "FROM ";
var tabla = "";
var nueva = 0;

$(document).ready(function(){
    $("#seleccionatabla").load("php/cargatablas.php");
    $("#sql").text(peticion + columnas + desde + tabla);
    $("#seleccionatabla").change(function () {
        tabla = $(this).val();
        $("#sql").text(peticion + columnas + desde + tabla);
        $("#seleccionacampos").load("php/cargacampos.php?tabla=" + tabla);
    })

})