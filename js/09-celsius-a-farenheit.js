const celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

if (isNaN(celsius)) {
    console.log("No ingresó una temperatura válida.");
} else {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C equivalen a ${fahrenheit}°F.`);
}
