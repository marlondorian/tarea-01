const texto = prompt("Ingrese una cadena de texto:");
if (texto === null) {
    console.log("No se ingresó ninguna cadena.");
} else {
    const longitud = texto.length;
    alert(`La longitud de la cadena ingresada es: ${longitud}`);
    console.log(`La longitud de la cadena ingresada es: ${longitud}`);
}