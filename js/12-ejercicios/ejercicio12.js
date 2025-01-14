/*
Programa que pida dos numeros y nos diga cual es el mayor, cual es el menor y si son iguales

PLUS: si los numeros no son numeros o son menores a cero, nos los vuelva a pedir

*/

let numeroUno = parseInt(prompt("¿Digite el primer Numero?",0));
let numeroDos = parseInt(prompt("¿Digite el segundo Numero?",0));

while(numeroUno <= 0 || numeroDos <=0 || isNaN(numeroUno) || isNaN(numeroDos)){
    numeroUno = parseInt(prompt("¿Digite el primer Numero?",0));
    numeroDos = parseInt(prompt("¿Digite el segundo Numero?",0));

}

if(numeroUno === numeroDos){
    alert("Los numeros son gemelos jeje(iguales)");
}else if(numeroUno > numeroDos){
    alert("El numero mayor es :"+numeroUno);
    alert("El numero menor es :"+numeroDos);
    
}else if(numeroDos > numeroUno){
    alert("El numero mayor es :"+numeroDos);
    alert("El numero menor es :"+numeroUno);
}else
{
    alert("Numeros incorrectos");
}
