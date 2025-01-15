/*
Ejercicio 19 

Muestra todos los numeros divisores de un numero que se mete en el prompt


for(let i = 1; i <=10; i++)

*/

let numero = parseInt(prompt("Digite el numero :", 1 ));

for(let i = 1; i<=numero; i++ ){

    if(numero % i == 0){
        console.log(`El ${i} es divisor de: ${numero}`);
    }
}
