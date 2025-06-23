const precio = parseFloat(prompt("Ingrese el precio del producto:"));
const iva = parseFloat(prompt("Ingrese el IVA (%):"));

if (isNaN(precio) || isNaN(iva) || precio < 0 || iva < 0) {
    console.log("Debe ingresar valores válidos y positivos.");
} else {
    const total = precio + (precio * iva / 100);
    console.log(`El precio total a pagar es: ${total}`);
} 