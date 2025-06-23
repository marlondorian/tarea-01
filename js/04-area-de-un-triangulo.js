const base = parseFloat(prompt("Ingrese la base del triángulo:"));
const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

// Validar que los datos sean números
if (isNaN(base) || isNaN(altura)) {
    console.log("Debes ingresar números válidos");
} else {
    const area = (base * altura) / 2;
    alert(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`); // Muestra en un popup
    console.log(`El área del triángulo es: ${area}`); // Muestra en consola
}
