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

// Ejemplo 2

let quieroCebolla = false;

if(quieroCebolla){
    console.log("Tu hamburguesa llevara cebolla");
}else{
    console.log("Tu hamburguesa no llevara cebolla");
}

// Ejercicio 3 

let nombre = "joaquin";
let edad = 80;

if(edad >=18){
    console.log("El alumno se puede inscribir");
}if(edad <=20){
    console.log("Eres un bambino");
}
else if(edad >=60){
    console.log("ESTAS UN POCO VIEJO");
}else{
    console.log("ERES HUMANO");
}

// Ejercicio # 4

let buenTiempo = true;

if(!buenTiempo){
    console.log("Vamos al parque chaval");
}

// Ejercicio # 5 - coindicional &&

let year = 1999;

if(year >= 2000 && year <= 2030){
    console.log("Estamos en la era Moderna");
}else if(year > 2030){
    console.log("Estamos en la era PostModerna");
}else{
    console.log("eres un arcaico");
}

// Ejercicio 6 Condicional OR

if(year == 2007 || year == 2017 || year == 2027 || year == 2037){
    console.log("El año acaba en 7..")
}else{
    console.log("Año desconocido")
}




