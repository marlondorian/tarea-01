const dolares = parseFloat(prompt("Ingrese la cantidad en dólares (USD):"));
const tipoCambio = 26.10;

if (isNaN(dolares) || dolares < 0) {
    console.log("Debe ingresar valores válidos y positivos.");
} else {
    const lempiras = dolares * tipoCambio;
    console.log(`${dolares} Dolares equivalen a ${lempiras} Lempiras al tipo de cambio de ${tipoCambio}.`);
}
