// Condicional Swich

let miDesayuno = 2

switch(miDesayuno){
    case 1:
        //Instrucciones codigo
        console.log("Huevitos con ranchera");
        break;

    case 2:
        console.log("agua panela con pan");
        break;

    case 3:
        console.log("Nada porque no hay nada");
        break;

    default:
        console.log("Pensativo el pendejo");
}

if(miDesayuno =="1"){
    console.log("Huevitos con ranchera");
}else if(miDesayuno == "2"){
        console.log("agua panela con pan");
}


// Concidiconal Ternario

let edad=18;

let resultado = (edad >=18) ? "Es mayor de edad" : "Es menor de edad";

console.log(resultado)


// Diferencia entre var y let ( ambito y bloques)

//La variable let solo funciona en ese bloque de codigo no funciona por fuera de dicho bloque
var curso = "Proyectos de desarrollo Html y Css";
if("hola" == "hola"){
    let curso ="master Marste";
}
console.log(curso);