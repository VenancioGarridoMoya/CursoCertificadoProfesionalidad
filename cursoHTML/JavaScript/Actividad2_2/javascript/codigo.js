let nombrePersona = prompt("Introduzca el nombre de la persona: ");
let annoNacientoPersona = parseInt(prompt("Introduzca el año de nacimiento de la persona: "));
let annoActual = new Date().getFullYear();
let edadPersona = annoActual - annoNacientoPersona;

document.getElementById("contenido").innerHTML =
    `Hola  ${nombrePersona}, estamos en el año ${annoActual}, 
     hoy tienes ${edadPersona} años.`;

document.getElementById("contenido").style.color = "blue";
document.getElementById("contenido").style.fontSize = "20px";
document.getElementById("contenido").style.fontFamily = "Arial, sans-serif";