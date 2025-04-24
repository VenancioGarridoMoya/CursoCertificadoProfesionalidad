let radio = parseFloat(prompt("Introduzca el radio en cm para dibujar la Circunferencia y el Área: "));
let longitudCircunferencia = 2 * Math.PI * radio;
let areaCircunferencia = Math.PI * Math.pow(radio, 2); // r*r  r**2

document.getElementById("contenido").innerHTML =
    `La longitud de la circunferencia de radio  ${radio}cm es ${longitudCircunferencia.toFixed(2)} 
    y el área del círculo es ${areaCircunferencia.toFixed(2)} cm².`;
   

document.getElementById("contenido").style.color = "blue";
document.getElementById("contenido").style.fontSize = "20px";
document.getElementById("contenido").style.fontFamily = "Arial, sans-serif";

dibujarCanvas();

function dibujarCanvas(){
    const PIXELESPORCM = 37.795275591; // 1cm = 37.795275591 px
    var radioEnPixeles = radio * PIXELESPORCM; // Convertir el radio a píxeles

    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    contexto.lineWidth = 5;
     // a. Arco desde 0 grados hasta 90 grados en sentido de las agujas del reloj
     contexto.beginPath();
     contexto.arc(300,300,radioEnPixeles,radianes('0'),radianes('360'),false);
     contexto.stroke();
     contexto.fillStyle = "orange";
     contexto.fill();
     
}
 function radianes(grados){
     var radianes = (Math.PI/180)*grados;
     return radianes;
}