const radio = parseFloat(prompt("Ingrese el radio del círculo:"));

if (isNaN(radio) || radio < 0) {
    console.log("No ingresó un radio válido.");
} else {
    const area = Math.PI * Math.pow(radio, 2);
    console.log(`El área del círculo de radio ${radio} es: ${area}`);
}
