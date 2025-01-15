/*
Tenemos una coleccion de numeros del 1 al 17.

El usuario tiene que adivinar cual es el elegido.

Hacer un programa para que pueda adivinar el numero.

*/
let = numeroElegido = 7;
let numeroUsuario;

while(numeroUsuario != numeroElegido and numeroUsuario >17){
    numeroUsuario = parseInt(prompt("Digita un numero del 1 al 17: "))

        if(numeroElegido == numeroUsuario){
            alert("Acertaste suertudo, boludo, el numero era el "+numeroElegido);
         }
    else{
            alert("Sigue intentando, pendejo !!!");

         }
}



