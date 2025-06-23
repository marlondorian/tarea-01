const kilometros = parseFloat(prompt("Ingrese el número de kilómetros recorridos:"));
const litros = parseFloat(prompt("Ingrese el número de litros consumidos:"));

if (isNaN(kilometros) || isNaN(litros) || kilometros <= 0 || litros <= 0) {
    console.log("Debe ingresar valores válidos y positivos.");
} else {
    const consumo = litros / kilometros;
    console.log(`El consumo de combustible es: ${consumo} litros por kilómetro.`);
} 