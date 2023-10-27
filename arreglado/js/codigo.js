var peticion = " SELECT "
var columnas = " ALL "
var desde = " FROM "
var tabla = " " 
var condiciones = " ";    
var limite = " LIMIT 1000"; 
var seleccionado = [];   

$(document).ready(function(){
    $("#seleccionatabla").load("php/cargatablas.php")
    resultadostabla()

    $("#seleccionatabla").change(function(){
        tabla = $(this).val();
        resultadostabla()
        $("#seleccionacampos").load("php/cargacampos.php?tabla="+tabla);
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
            var campo = seleccionado[i];
            var alias = $("input[alias='" + campo + "']").val();
            if (alias) {
                columnas += campo + " AS '" + alias + "',";
            } else {
                columnas += campo + ",";
            }
        }
        
        columnas = columnas.slice(0, -1);
        resultadostabla()

        //Condiciones

        $("#seleccionacondiciones").html("")
        for(var i = 0;i<seleccionado.length;i++){
            $("#seleccionacondiciones").append('<div class="condicion"><input type="text" name="" class="nuevacondicion" placeholder="'+seleccionado[i]+'" campo="'+seleccionado[i]+'""></div><br>');

        }
        //Alias
        $("#seleccionaalias").html("")
        for (var i = 0; i < seleccionado.length; i++) {
            $("#seleccionaalias").append('<div class="alias"><input type="text" name="" class="nuevoalias" alias="' + seleccionado[i] + '" placeholder="" campo="' + seleccionado[i] + '"></div><br>');
        }
        
  
    })
    //$(".nuevacondicion").change(function(){
        $(document).on("keydown", ".nuevacondicion", function () {
            console.log("Probando");
            var condicionesArray = [];
            $(".nuevacondicion").each(function () {
                if ($(this).val() !== "") {
                    condicionesArray.push($(this).attr('campo') + " LIKE '%" + $(this).val() + "%'");
                }
            });
            condiciones = " WHERE " + condicionesArray.join(' AND ');
            resultadostabla();
        });

        $(document).on("keydown",".nuevoalias",function(){
            seleccionado = []
            $('input[name="seleccionacampos"]').each(function(){
                if($(this).is(":checked")){
                    seleccionado.push($(this).val());
                }
            })
        })
        // Introduzco los alias
        columnas = "";
        for(var i = 0;i<seleccionado.length;i++){
            columnas += seleccionado[i]+" ";
            if($("input[alias='"+seleccionado[i]+"']").val() != ""){
                columnas += "AS '"+$("input[alias='" + seleccionado[i] + "']").val()+"' " 
            }
            columnas += ","
        }
        columnas = columnas.slice(0, -1);
        resultadostabla()
        

        $("#limite").change(function(){
            limite = " LIMIT " + $(this).val(); // Agrega un espacio antes de "LIMIT"
            resultadostabla();
        });
})

function resultadostabla(){
    if(tabla){
    $("#sql").text(peticion+columnas+desde+tabla+condiciones+limite)
    $("#resultadostabla").
    load("php/resultadostabla.php?sql="+encodeURI(peticion+columnas+desde+tabla+condiciones+limite))
    } else {
        $("#sql").text("No se ha seleccionado una tabla.");
        $("#resultadostabla").empty(); // Limpia el contenido
}
}  