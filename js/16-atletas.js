// Atleta 1
const min1 = parseInt(prompt("Ingrese los minutos del Atleta 1:"));
const seg1 = parseInt(prompt("Ingrese los segundos del Atleta 1:"));
// Atleta 2
const min2 = parseInt(prompt("Ingrese los minutos del Atleta 2:"));
const seg2 = parseInt(prompt("Ingrese los segundos del Atleta 2:"));

if (min1 < 0 || seg1 < 0 || seg1 > 60 || min2 < 0 || seg2 < 0 || seg2 > 60) {
    console.log("Debe ingresar valores válidos (minutos >= 0, segundos entre 0 y 59).");
} else {
    // Convertir todo a segundos
    const totalSegundos = (min1 * 60 + seg1) + (min2 * 60 + seg2);
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    console.log(`El tiempo total es: ${horas} horas, ${minutos} minutos y ${segundos} segundos.`);
}
