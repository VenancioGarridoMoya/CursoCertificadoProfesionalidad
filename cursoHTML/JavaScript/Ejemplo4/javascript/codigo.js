let cadenaInicial = "  Compartir el conocimiento es el acto más fundamental de la amistad. Porque es una forma de dar algo sin perder nada.  ";
let longitudCadena = cadenaInicial.length;
let cadenaEnMayusculas = cadenaInicial.toUpperCase();
let cadenaEnMinusculas = cadenaInicial.toLowerCase();
let cadenaSinEspacios = cadenaInicial.replace(/\s+/g, ""); 
let cadenaContenido = `La cadena inicial es: "${cadenaInicial}"` +
    "<br>" +
    `la longitud de la cadena es: ${longitudCadena}` +
    "<br>" +
    `La cadena en mayúsculas es: "${cadenaEnMayusculas}"` +
    "<br>" +
    `La cadena en minúsculas es: "${cadenaEnMinusculas}"`+
    "<br>" +
    `La cadena sin espacios es: "${cadenaSinEspacios}"` +
    "<br>" +
    `La longitud de la cadena sin espacios es: ${cadenaSinEspacios.length}` ;


document.getElementById("contenido").innerHTML = cadenaContenido;
document.getElementById("contenido").style.color = "blue";
document.getElementById("contenido").style.fontSize = "20px";
document.getElementById("contenido").style.fontFamily = "Arial, sans-serif";
console.log(cadenaContenido);