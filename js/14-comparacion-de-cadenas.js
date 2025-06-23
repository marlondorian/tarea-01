const cadena1 = prompt("Ingrese la primera cadena de texto:");
const cadena2 = prompt("Ingrese la segunda cadena de texto:");

if (cadena1 === null || cadena2 === null) {
    console.log("No se ingresaron ambas cadenas.");
} else if (cadena1 === cadena2) {
    console.log("Las cadenas son iguales.");
} else {
    console.log("Las cadenas son diferentes.");
}
