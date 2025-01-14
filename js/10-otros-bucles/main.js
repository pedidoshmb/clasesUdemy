//Bucle While

/*
let contador =0;

while(condicion){

    //Si se cumple se ejecuta indefinidamente

    contador++;
}

*/

//Ejemplo

let year =1900;
let objetivo = 2177;

while(year <=2177){
    console.log("Vamos por el año :"+year);

    //Vamos a decirle que cuando llegue a X año pare el bucle y seria asi
    if(year ===2000){
        break;
    }
    
    year++;
}

// BUCLE DO WHILE 

/*
do{
    //Ejecutas el codigo

}while(condicion);

*/

let numeros = 47;

do{
    console.log(numeros);
    numeros--;
}while(numeros >0);