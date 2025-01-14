/*

En mi tienda de videojuegos tenemos una oferta, si compras un video de 50 Euros o mas
te hacemos el 20% de Descuento.te hacemos un descuento del 20%.

Si un cliente compra el Tekken 15 que cuesta 50 Euros ¿En cuanto le queda?

*/

const descuento = 0.2;
let valorJuego = 50;

let totalDescuento = valorJuego * descuento;

let TotalApagar = valorJuego - totalDescuento;

console.log("Valor total es de : "+TotalApagar);
