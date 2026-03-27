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
            numeroInterrupcion = i; // Guarda el número en el que se detuvo el ciclo
            break; // Detiene el ciclo por completo
        }
        suma += i;
    }

    return {
        resultado: suma, // Devuelve el resultado de la suma acumulada
        detenidoEn: numeroInterrupcion // Devuelve el número en el que se detuvo el ciclo, o null si no hubo interrupción
    };
}

/**
 * FUNCIÓN PRINCIPAL (Main):
 * Orquestadora de la ejecución.
 */
function ejecutarEjercicio() { // Define el límite máximo para la suma
    const LIMITE = 100; // Calcula la suma con la condición de parada en 100
    const data = calcularSumaCondicional(LIMITE); // Reporta el resultado de la suma y si hubo una interrupción

    console.log("--- Reporte de Suma ---"); // Imprime el resultado de la suma acumulada
    if (data.detenidoEn) {  // Si hubo una interrupción, reporta el número en el que se detuvo el ciclo
        console.log(` Ciclo interrumpido en el número: ${data.detenidoEn}`); // Si no hubo interrupción, indica que se completó la suma hasta el límite máximo
    }
    console.log(`La suma total acumulada es: ${data.resultado}`);  // Imprime el resultado final de la suma acumulada
}

// Ejecución del programa
ejecutarEjercicio();