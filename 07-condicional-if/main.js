// Condicional IF
// Si A es igual a B entonces haz algo,

//Ejemplo 1.

let estalloviendo = true;

if(estalloviendo === true){
    //Si esta condicion se cumple se ejecuta este codigo
    console.log("Me llevo la sombrilla para no mojarme el JOPO");
}else{
    //Si no se cumple ejecuta esto.
    console.log("Me abro del parche");
}

let nombre = "Mauricio";

let edad = 18;

if(edad >=18){
    console.log("Puedes votar");
}if(edad <=20){
    console.log("Estas como muy enano");
}else if(edad >=60){
    console.log("estas un poco anciano");
}