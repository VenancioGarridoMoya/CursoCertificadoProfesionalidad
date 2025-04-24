let numero1 = parseInt(prompt("Introduzca el número1: "));
let numero2 = parseInt(prompt("Introduzca el número2: "));
let numero3 = parseInt(prompt("Introduzca el número3: "));
let cadenaAMostrar = `El número1 es ${numero1}, el número2 es ${numero2} y el número3 es ${numero3}. <br>`;

if (numero1== numero2 && numero1 == numero3) {
    cadenaAMostrar += `Los tres números son iguales`;
} else if (numero1 > numero2) {
    if (numero1 > numero3) {
        cadenaAMostrar += `El número1 es el mayor`;
    } else {
        cadenaAMostrar += `El número3 es el mayor`;
    } 
} else if (numero2 > numero3) {
    cadenaAMostrar += `El número2 es el mayor`;
} else cadenaAMostrar += `El número3 es el mayor`;
       
document.getElementById("contenido").innerHTML = cadenaAMostrar;

document.getElementById("contenido").style.color = "blue";
document.getElementById("contenido").style.fontSize = "20px";
document.getElementById("contenido").style.fontFamily = "Arial, sans-serif";