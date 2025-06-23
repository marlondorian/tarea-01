const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const num3 = parseFloat(prompt("Ingrese el tercer número:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Debe ingresar tres números válidos.");
} else {
    const promedio = (num1 + num2 + num3) / 3;
    console.log(`El promedio de los tres números es: ${promedio}`);
}
