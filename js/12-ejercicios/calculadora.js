let n1;
let n2;

while(n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)){
    n1 = parseInt(prompt("Digita el primer numero"));
    n2 = parseInt(prompt("Digita el segundo numero"));
}
let resultado = `
Suma: ${n1+n2}
Resta: ${n1-n2}
Multiplicacion: ${n1 * n2}
Division: ${n1 / n2}`;

alert(resultado);
console.log(resultado);
