// Funciones

// una funcion agrupa una serie de instrucciones para poder usarla varias veces

// es una agrupacion reutilizables de un conjunto de instrucciones

//En este ejemplo a la funcion le enviamos los parametros, lo que hace que no sea obligatorio enviarlos
function saludo(nombre = " Alejandrina", plato = "Torta de huevo"){
    console.log("Hola abuela, "+nombre+".!!");
    console.log("Que tal estas!!");
    console.log("Me pasas la receta de tu "+plato+" por favor. !!" )
    console.log("**********************");

    return "Abuela "+nombre+" saludada sin problema. !!!";
}
//Invocamos la funcion
let mensajeFinal = saludo("Ubaldina","arrozConPollo");

alert(mensajeFinal);
saludo("Martha", "pescado");
saludo("Ubaldina", "CarneFrita");
saludo("Adela", "ArrozConPollo");

saludo();


/*
FUNCION DENTRO DE OTRA FUNCION
*/


function calculadora(numero1, numero2, mostrar = false){

    if(mostrar == false){
    console.log("Suma: "+(numero1 + numero2));
    console.log("Resta :"+(numero1 - numero2));
    console.log("Multiplicacion:"+(numero1 * numero2));
    console.log("Division :"+(numero1 / numero2));
}else
{
    document.write("<h2>Suma : "+(numero1 + numero2)+"</h2>");
    document.write("<h2>Resta : "+(numero1 - numero2)+"</h2>");
    document.write("<h2>Multiplicacion :"+(numero1 * numero2)+"</h2>");
    document.write("<h2>Division :"+(numero1 / numero2)+"</h2>");
}
    return true;

}

calculadora(7,9);
calculadora(7,9, true);