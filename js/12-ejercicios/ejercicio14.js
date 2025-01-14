/*
Un DJ no sabe que genero musical poner el la fiesta...
Preguntale al usuario que genero quiere (POP, ROCK o RAP)
Segun lo que el prefiera devuelve un mensaje diferente

*/

let genero = prompt("¿Que genero musical prefieres? (salsa, vallenato, beber");

switch(genero){

    case "salsa":
        alert("Esta sonando Gran Combo - cancion: no hago mas Na");
        break;

    case "vallenato":
        alert("Esta sonando los Chiches - Cancion: Tierra mala");
        break;

    case "beber":
        alert("Esta sonando Dario Gomez - cancion: Entre comillas");
        break;

    default:
        alert("No seleccionaste las opciones adecuadas");
        break;
}