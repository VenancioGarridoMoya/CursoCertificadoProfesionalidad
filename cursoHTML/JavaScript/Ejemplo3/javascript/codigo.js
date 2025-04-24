let numero1 = parseFloat(prompt("Introduzca el número 1: "));

let numero2 = --numero1;
alert("Voy a mostrar los valores de las variables en HTML")

document.getElementById("contenido").innerHTML =  
`El numero1 es ${numero1}`+
"<br>"+
`el numero2 es ${numero2}`;
    
  
    
document.getElementById("contenido").style.color = "blue";
document.getElementById("contenido").style.fontSize = "20px";
document.getElementById("contenido").style.fontFamily = "Arial, sans-serif";

