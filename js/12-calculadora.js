const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Debe ingresar dos números válidos.");
} else {
    let resultado;
    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            console.log(`${num1} + ${num2} = ${resultado}`);
            break;
        case '-':
            resultado = num1 - num2;
            console.log(`${num1} - ${num2} = ${resultado}`);
            break;
        case '*':
            resultado = num1 * num2;
            console.log(`${num1} * ${num2} = ${resultado}`);
            break;
        case '/':
            if (num2 === 0) {
                console.log("No se puede dividir por cero.");
            } else {
                resultado = num1 / num2;
                console.log(`${num1} / ${num2} = ${resultado}`);
            }
            break;
        default:
            console.log("Operación no válida. Use +, -, * o /");
    }
}
