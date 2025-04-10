
function dibujarCanvas() {
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    // primera forma, dibujar espiral
    contexto.beginPath();
    var x = 100; //  x centro espiral 
    var y = 70; //  y centro espiral 
    var r = 0; // radio inicial
    var incre = 3; // incremento del radio
    var vueltas = 5; // vueltas
    for (var i = 1; i <= vueltas; i++) {
        contexto.arc(x, y, r = r + incre, 0, radianes(90), false);
        contexto.arc(x, y - incre, r = r + incre, radianes(90), radianes(180), false);
        contexto.arc(x + incre, y - incre, r = r + incre, radianes(180), radianes(270), false);
        contexto.arc(x + incre, y, r = r + incre, radianes(270), 0, false);
    }
    contexto.lineWidth = 4;         // ancho de línea
    contexto.fillStyle = '#99CC00'; // verde
    contexto.fill();                // dibujar relleno
    contexto.strokeStyle = 'rgb(1,64,224)'; // azul
    contexto.stroke();              // dibujar trazo  

    // segunda  forma, círculo y segmento
    contexto.beginPath();
    contexto.arc(330, 30, 15, radianes(0), radianes(360), false);
    contexto.moveTo(380, 30);
    contexto.lineTo(400, 30);
    contexto.lineWidth = 6;
    contexto.fillStyle = '#FFFF99'; // amarillo
    contexto.fill();
    contexto.stroke();

    // tercera forma rectángulo rojo transparente
    contexto.fillStyle = 'rgba(221,64,4, 0.2)'; // rojo transparente
    contexto.fillRect(300, 5, 125, 75);
}
function radianes(grados) {
    var radianes = (Math.PI / 180) * grados;
    return radianes;
}
