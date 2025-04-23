let numero1 = parseFloat(prompt("Introduzca el número 1: "));
let numero2 = parseFloat(prompt("Introduzca el número 2: "));
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** numero2;
document.getElementById("contenido").innerHTML =  
    `La suma de ${numero1} y ${numero2} es: ${suma}` +
    "<br>" +
    `La resta de ${numero1} menos ${numero2} es: ${resta}`+
    "<br>" +
    `La multiplicación de ${numero1} por ${numero2} es: ${multiplicacion}`+
    "<br>" +
    `La división de ${numero1} entre ${numero2} es: ${division}`+
    "<br>" +
    `El resto de ${numero1} entre ${numero2} es: ${resto}`+
    "<br>" +
    `La potencia de ${numero1} elevado a ${numero2} es: ${potencia}`;
    

document.getElementById("contenido").style.color = "blue";
document.getElementById("contenido").style.fontSize = "20px";
document.getElementById("contenido").style.fontFamily = "Arial, sans-serif";
