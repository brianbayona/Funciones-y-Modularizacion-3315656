// --- CONFIGURACIÓN (Simulando un módulo de constantes) ---
const LIMITE_BOLETOS = 15;
/** Genera datos aleatorios del cliente y la película */
function generarDatosVenta() {
    return {
        edad: Math.floor(Math.random() * 30) + 10, // 10 a 39 años
        esParaAdultos: Math.random() < 0.5         // true o false
    };
}

/** Valida si la venta es permitida según la edad */
function esVentaValida(edad, esPeliculaAdultos) {
    if (edad < 18 && esPeliculaAdultos) {
        return false;
    }
    return true;
}

/** Procesa la lógica principal de la taquilla */
function iniciarVenta() {
    let boletosVendidos = 0;
    console.log("--- Inicio de la venta de boletos ---");

    while (boletosVendidos < LIMITE_BOLETOS) {
        const cliente = generarDatosVenta();
        
        if (esVentaValida(cliente.edad, cliente.esParaAdultos)) {
            boletosVendidos++;
            console.log(` VENTA EXITOSA. Edad: ${cliente.edad} | Boletos: ${boletosVendidos}/${LIMITE_BOLETOS}`);
        } else {
            console.log(` VENTA DENEGADA. Menor de ${cliente.edad} años no puede ver película de adultos.`);
        }
    }

    console.log("--- Venta finalizada: Cupo lleno ---");
}

// --- EJECUCIÓN ---
iniciarVenta();