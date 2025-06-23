const contrasenaPredefinida = "UNAH-COPAN";
const contrasenaUsuario = prompt("Ingrese la contraseña:");

if (contrasenaUsuario === null) {
    console.log("No se ingresó ninguna contraseña.");
} else if (contrasenaUsuario === contrasenaPredefinida) {
    console.log("Contraseña correcta.");
} else {
    console.log("Contraseña incorrecta.");
}
