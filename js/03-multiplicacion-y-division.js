const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Validar que los datos sean números
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Debes ingresar números válidos");
} else {
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;
    alert(`La multiplicacion de ${numero1} y ${numero2} es: ${multiplicacion}` + "\n" + `La division de ${numero1} y ${numero2} es: ${division}`); // Muestra en un popup
    console.log(`La multiplicacion es: ${multiplicacion}` + "\n" + `La division es: ${division}`); // Muestra en consola
}