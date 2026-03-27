/**
 * REGLA DE NEGOCIO:
 * Determina si el ciclo debe detenerse.
 */
function debeInterrumpir(numero) {
    return numero > 90 && numero % 2 === 0; // Condición de interrupción: números pares mayores a 90
}

// LÓGICA DE PROCESAMIENTO:
 // Realiza la suma con la condición de parada.
function calcularSumaCondicional(limiteMaximo) {// Inicializa la suma y la variable de interrupción
    let suma = 0;
    let numeroInterrupcion = null;

    for (let i = 1; i <= limiteMaximo; i++) { // Itera desde 1 hasta el límite máximo
        if (debeInterrumpir(i)) { // Verifica si se debe interrumpir el ciclo
            numeroInterrupcion = i;
            break; // Detiene el ciclo por completo
        }
        suma += i;
    }

    return {
        resultado: suma,
        detenidoEn: numeroInterrupcion
    };
}

/**
 * FUNCIÓN PRINCIPAL (Main):
 * Orquestadora de la ejecución.
 */
function ejecutarEjercicio() {
    const LIMITE = 100;
    const data = calcularSumaCondicional(LIMITE);

    console.log("--- Reporte de Suma ---");
    if (data.detenidoEn) {
        console.log(`⚠️ Ciclo interrumpido en el número: ${data.detenidoEn}`);
    }
    console.log(`✅ La suma total acumulada es: ${data.resultado}`);
}

// Ejecución del programa
ejecutarEjercicio();