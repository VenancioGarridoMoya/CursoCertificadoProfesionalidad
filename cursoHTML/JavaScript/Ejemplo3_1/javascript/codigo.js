let nombrePersona = prompt("Introduzca el nombre de la persona: ");
let edadPersonaPersona = parseInt(prompt("Introduzca la edad de la persona: "));
let cadenaAMostrar = `Hola ${nombrePersona} tienes ${edadPersonaPersona} años y eres `;

if (edadPersonaPersona < 0 || edadPersonaPersona > 120) {
    cadenaAMostrar = ` Hola, parece que La edad introducida no es correcta`;
} else {
    if (edadPersonaPersona < 18) {
        cadenaAMostrar += `menor de edad`;
    } else {
        cadenaAMostrar += `mayor de edad`;
    }
}

document.getElementById("contenido").innerHTML = cadenaAMostrar;

document.getElementById("contenido").style.color = "blue";
document.getElementById("contenido").style.fontSize = "20px";
document.getElementById("contenido").style.fontFamily = "Arial, sans-serif";