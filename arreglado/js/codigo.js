var peticion = "SELECT ";
var columnas = " * ";
var desde = " FROM ";
var tabla = "";
var condiciones = " ";

$(document).ready(function(){
    $("#seleccionatabla").load("php/cargatablas.php");
    resultadostabla()
    $("#seleccionatabla").change(function () {
        tabla = $(this).val();
        resultadostabla()
        $("#seleccionacampos").load("php/cargacampos.php?tabla=" + tabla);
    })
    $("#seleccionacampos").change(function(){
        seleccionado = []
        $('input[name="seleccionacampos"]').each(function(){
            if ($(this).is(":checked")){
                seleccionado.push($(this).val());
            }
        });
        console.table(seleccionado)
        columnas = "";
        for (var i = 0; i < seleccionado.length; i++) {
            columnas += seleccionado[i]+",";
        }
        columnas = columnas.slice(0, -1);
        resultadostabla()
        $("#seleccionacondiciones").html("")
        for (var i = 0; i < seleccionado.length; i++) {
            $("#seleccionacondiciones").append('<div class="condicion">'+seleccionado[i]+
            '= <input type="text" name="" class="nuevacondicion" campo="'+seleccionado[i]+'"></div>');
        }
       
    })
    $(document).on("keyup",".nuevacondicion", function() {
        console.log("Probando");
        condiciones = " WHERE "
        $(".nuevacondicion").each(function() {
            if ($(this).val() !== "") {
                condiciones += $(this).attr('campo')+" LIKE '%"+$(this).val()+"%' &"
            }
        })
        condiciones = condiciones.slice(0,-1);
        resultadostabla();
    });
    
})

function resultadostabla(){
    if(tabla){
        $("#sql").text(peticion+columnas+desde+tabla+condiciones)
        $("#resultadostabla").
        load("php/resultadostabla.php?sql="+encodeURI(peticion+columnas+desde+tabla+condiciones))
    } else {
        $("#sql").text("No se ha seleccionado una tabla.");
        $("#resultadostabla").empty(); // Limpia el contenido
}
}  