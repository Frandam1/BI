var peticion = "SELECT ";
var columnas = " * ";
var desde = " FROM ";
var tabla = "";


$(document).ready(function(){
    $("#seleccionatabla").load("php/cargatablas.php");
    resultadostabla()
    $("#seleccionatabla").change(function () {
        tabla = $(this).val();
        resultadostabla()
        $("#seleccionacampos").load("php/cargacampos.php?tabla=" + tabla);
    })
    $("#seleccionacampos").change(function(){
        columnas = $(this).val()
        resultadostabla()
    })

})

function resultadostabla(){
    if(tabla){
        $("#sql").text(peticion+columnas+desde+tabla)
        $("#resultadostabla").
        load("php/resultadostabla.php?sql="+encodeURI(peticion+columnas+desde+tabla))
    } else {
        $("#sql").text("No se ha seleccionado una tabla.");
        $("#resultadostabla").empty(); // Limpia el contenido
}
}  