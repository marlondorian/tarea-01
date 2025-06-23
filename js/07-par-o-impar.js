const numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero)) {
    console.log("No ingresó un número válido.");
} else if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}
