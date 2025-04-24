let respuestaUsuario = prompt("Tengo agujas pero no sé coser, tengo números pero no sé leer, las horas te doy, ¿Sabes quién soy? ");
const respuestaCorrecta = "reloj";

let cadenaAMostrar ;

if (respuestaUsuario.toLowerCase() == respuestaCorrecta) { 
    cadenaAMostrar = `¡Correcto! La respuesta es "${respuestaUsuario}".`;
} else {
    cadenaAMostrar = `¡Incorrecto! La respuesta  "${respuestaUsuario}" es incorrecta.`;
}
  
document.getElementById("contenido").innerHTML = cadenaAMostrar;

document.getElementById("contenido").style.color = "blue";
document.getElementById("contenido").style.fontSize = "20px";
document.getElementById("contenido").style.fontFamily = "Arial, sans-serif";