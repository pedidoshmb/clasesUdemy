/*
Ejercicio 21:

Calculadora:

-Pida dos numeros por pantalla
-Si ingresamos un numero mal que nos lo vuelva a pedir
-En un alert y por la consola mostrar el resultado de sumar, restar, multiplicar y dividir Esas cifras


switch(genero){

    case "salsa":
        alert("Esta sonando Gran Combo - cancion: no hago mas Na");
        break;


*/
let numero1 = parseInt(prompt("Digita el primer numero menso"),0);
let numero2 = parseInt(prompt("Digita el segundo numero toche"),0);

//Validamos que se ingresen numeros
while (isNaN(numero1) || isNaN(numero2)) {
    if(isNaN(numero1)){
        numero1 = parseInt(prompt("Digita el primer numero menso"),0);
    }
    if(isNaN(numero2)){
        numero2 = parseInt(prompt("Digita el segundo numero toche"),0);
    }
}
//Pedir que opcion va a seleccionar el usuario

let calculadora = prompt("Que operacion deseas relizar, suma, resta, multiplicacion, division");

switch (calculadora){

    case "suma":
        let suma = numero1 + numero2;
        alert("El valor de la suma es de : "+suma);
        console.log("el valor de la suma es de :"+suma);
        break;

    case "resta":
        let resta = numero1 - numero2;
        alert("El valor de la resta es de :"+resta);
        console.log("el valor de la resta es de :"+resta);
        break;

    case "multiplicacion":
        let multiplicacion = numero1 * numero2;
        alert("El valor de la multiplicacion es de : "+multiplicacion);
        console.log("el valor de la multiplicacion es de :"+multiplicacion);
        break;

    case "division":
        if (numero2 !== 0) {
            let division = numero1 / numero2;
        alert("El valor de la division es de : "+division);
        console.log("el valor de la division es de : "+division);
        }else {
            alert("No se puede dividir entre 0 : ");    
              }
        break;

    default:
        alert("No seleccionaste las opciones adecuadas");
        break;
}




