const numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero) || numero < 2) {
    console.log("Debe ingresar un número entero mayor o igual a 2.");
} else {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            i = numero;
        }
    }
    if (esPrimo) {
        console.log(`El número ${numero} es primo.`);
    } else {
        console.log(`El número ${numero} no es primo.`);
    }
}
