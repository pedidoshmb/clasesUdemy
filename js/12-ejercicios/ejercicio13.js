/*
Ejercicio 13

tengo un canguro que salta 3Mts cada vez.
Haz un programa que diga cuantos saltos ha dado el canguro...

y cual es la distancia recorrida tras 17 saltos


let saltos = parseInt(prompt("Numero de saltos",0))
let distancia = saltos * 3 ;

alert("El numero de saltos del canguro es de :"+saltos);
alert("La distancia recorrida es de : "+distancia);


*/
let saltos1 = 17;
let distancia = 3;

let distanciaRecorrida = 0;

for(let contador =1; contador <= saltos1; contador++){

    distanciaRecorrida += distancia;

    console.log("El canguro loco ha saltado  " +contador+ " salto y ha recorrido  "+distanciaRecorrida+" Mts");

}
