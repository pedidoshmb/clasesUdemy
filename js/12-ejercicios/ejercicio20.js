/*
Ejercicio 20:

Con base en un numero que digite el usuario digame si es par o impar

while(numeroUsuario != numeroElegido and numeroUsuario >17){
    numeroUsuario = parseInt(prompt("Digita un numero del 1 al 17: "))

        if(numeroElegido == numeroUsuario){
            alert("Acertaste suertudo, boludo, el numero era el "+numeroElegido);
         }
    else{
            alert("Sigue intentando, pendejo !!!");

         }
}

for(let i = 1; i<=numero; i++ ){

    if(numero % i == 0){
        console.log(`El ${i} es divisor de: ${numero}`);
    }
}

*/

let numero = parseInt(prompt("Digite el numero :", 1 ));

while(isNaN(numero)){
    numero = parseInt(prompt("Digite el numero :", 1 ));
}

if(numero % 2 === 0){
    alert("El numero "+numero+" es par");
}else
    {
        alert("El numero "+numero+" es impar");
    }


