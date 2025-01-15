/*
Ejercicio 16:

Escribir un programa uqe muestre la tabla de multiplicar del numero que digita el usuario.

*/

let numero = parseInt(prompt("¿De que numero quieres ver la tabla de multiplicar?", 1));

let resultadoCompleto = "Tabla del "+numero;

for(let i = 1; i <=10; i++){

    let multiplicacion = i * numero;
    
    resultadoCompleto += "\n"+i+" x "+numero+" = "+multiplicacion;
}
console.log("Resultado es : "+resultadoCompleto);