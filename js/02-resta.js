const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Validar que los datos sean números
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Debes ingresar números válidos");
} else {
    const resta = numero1 - numero2;
    alert(`La resta de ${numero1} y ${numero2} es: ${resta}`); // Muestra en un popup
    console.log(`La resta es: ${resta}`); // Muestra en consola
}