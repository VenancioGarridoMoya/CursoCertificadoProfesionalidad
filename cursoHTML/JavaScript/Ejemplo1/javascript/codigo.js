
let miPrimerNumero = parseInt(prompt("Introduce el primer número:"));
let miSegundoNumero = parseInt(prompt("Introduce el segundo número:"));
let laSuma = miPrimerNumero + miSegundoNumero;
console.log("La suma es: " + laSuma);
let laResta = miPrimerNumero - miSegundoNumero;
console.log("La resta es: " + laResta);
let laMultiplicacion = miPrimerNumero * miSegundoNumero;
console.log("La multiplicación es: " + laMultiplicacion);
let laDivision = miPrimerNumero / miSegundoNumero;
console.log("La división es: " + laDivision);
let elResto = miPrimerNumero % miSegundoNumero;
console.log("El resto es: " + elResto);
let laPotencia = miPrimerNumero ** miSegundoNumero;
console.log("La potencia es: " + laPotencia);
document.getElementById("contenido").innerHTML =
    `La suma de ${miPrimerNumero} y ${miSegundoNumero} es: ${laSuma}` +
    "<br>" +
    `La resta de ${miPrimerNumero} menos ${miSegundoNumero} es: ${laResta}`+
    "<br>" +
    `La multiplicación de ${miPrimerNumero} por ${miSegundoNumero} es: ${laMultiplicacion}`+
    "<br>" +
    `La división de ${miPrimerNumero} entre ${miSegundoNumero} es: ${laDivision}`+
    "<br>" +
    `El resto de ${miPrimerNumero} entre ${miSegundoNumero} es: ${elResto}`+
    "<br>" +
    `La potencia de ${miPrimerNumero} elevado a ${miSegundoNumero} es: ${laPotencia}`;
