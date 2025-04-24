let cadenaInicial = prompt("Introduzca una cadena: ");
let longitudCadena = cadenaInicial.length;
let cadenaEnMayusculas = cadenaInicial.toUpperCase();
let cadenaEnMinusculas = cadenaInicial.toLowerCase();

document.getElementById("contenido").innerHTML =  
`La cadena inicial es: "${cadenaInicial}"`+
"<br>"+
`la longitud de la cadena es: ${longitudCadena}`+
"<br>"+
`La cadena en mayúsculas es: "${cadenaEnMayusculas}"`+
"<br>"+
`La cadena en minúsculas es: "${cadenaEnMinusculas}"`;

  
    
document.getElementById("contenido").style.color = "blue";
document.getElementById("contenido").style.fontSize = "20px";
document.getElementById("contenido").style.fontFamily = "Arial, sans-serif";