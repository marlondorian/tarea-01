const pies = parseFloat(prompt("Ingrese la cantidad en pies:"));
const metros = parseFloat(prompt("Ingrese la cantidad en metros:"));

if (isNaN(pies) || isNaN(metros) || pies < 0 || metros < 0) {
    console.log("Debe ingresar valores válidos y positivos.");
} else {
    const metrosTotales = metros + (pies * 0.3048);
    const pulgadas = metrosTotales / 0.0254;
    const yardas = metrosTotales / 0.9144;
    const millas = metrosTotales / 1609;
    console.log(`Suma total en metros: ${metrosTotales}`);
    console.log(`Suma total en pulgadas: ${pulgadas}`);
    console.log(`Suma total en yardas: ${yardas}`);
    console.log(`Suma total en millas: ${millas}`);
} 