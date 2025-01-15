/*
Mostrar todos los numeros impares que esten entre 2 numeros que el usuario digite

*/

let numero1 = parseInt(prompt("¿Digite el primer numero?", 0));
let numero2 = parseInt(prompt("¿Digite el segundo numero ", 0));

while(numero1 < numero2){

    numero1++;

    if(numero1 % 2 != 0){
        console.log(`El ${numero1} es impar`);
    }
}



