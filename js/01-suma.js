const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Validar que los datos sean números
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("¡Debes ingresar números válidos!");
} else {
    const suma = numero1 + numero2;
    alert(`La suma de ${numero1} y ${numero2} es: ${suma}`); // Muestra en un popup
    console.log(`La suma es: ${suma}`); // Muestra en consola
}