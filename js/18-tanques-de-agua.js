const litros = parseFloat(prompt("Ingrese la capacidad del primer tanque en litros:"));
const yardasCubicas = parseFloat(prompt("Ingrese la capacidad del segundo tanque en yardas cúbicas:"));

if (isNaN(litros) || isNaN(yardasCubicas) || litros < 0 || yardasCubicas < 0) {
    console.log("Debe ingresar valores válidos y positivos.");
} else {
    const metrosCubicosTanque1 = litros / 1000;
    const piesCubicosTanque2 = yardasCubicas * 27;
    const metrosCubicosTanque2 = piesCubicosTanque2 * 0.0283;
    const metrosCubicosTotales = metrosCubicosTanque1 + metrosCubicosTanque2;
    const consumoDomesticoM3 = metrosCubicosTotales * 0.75;
    const riegoM3 = metrosCubicosTotales * 0.25;
    const consumoDomesticoFt3 = consumoDomesticoM3 / 0.0283;
    const riegoFt3 = riegoM3 / 0.0283;
    console.log(`Total de agua: ${metrosCubicosTotales} m³`);
    console.log(`Consumo doméstico: ${consumoDomesticoM3} m³ (${consumoDomesticoFt3} pies³)`);
    console.log(`Riego: ${riegoM3} m³ (${riegoFt3} pies³)`);
} 