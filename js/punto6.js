// --- CONFIGURACIÓN (Simulando un módulo de constantes) ---
const LIMITE_BOLETOS = 15;
/** Genera datos aleatorios del cliente y la película */
function generarDatosVenta() {
    return {
        edad: Math.floor(Math.random() * 30) + 10, // 10 a 39 años // Simulamos la edad del cliente
        esParaAdultos: Math.random() < 0.5         // verificamos si es verdad o falso
    };
}

/** Valida si la venta es permitida según la edad */
function esVentaValida(edad, esPeliculaAdultos) {
    if (edad < 18 && esPeliculaAdultos) { //restringe la edad para ver peliculas de adultos
        return false;
    }
    return true;
}

/** Procesa la lógica principal de la taquilla */
function iniciarVenta() {
    let boletosVendidos = 0; // Contador de boletos vendidos 
    console.log("--- Inicio de la venta de boletos ---");

    while (boletosVendidos < LIMITE_BOLETOS) { //GENERA VENTAS HASTA QUE SE LLENE EL LIMITE DE BOLETOS
        const cliente = generarDatosVenta();
        
        if (esVentaValida(cliente.edad, cliente.esParaAdultos)) { //VALIDA SI LA VENTA ESTA PERMITIDA
            boletosVendidos++; // INCREMENTA EL CONTADOR DE BOLETOS VENDIDOS
            console.log(` VENTA EXITOSA. Edad: ${cliente.edad} | Boletos: ${boletosVendidos}/${LIMITE_BOLETOS}`);
        } else {
            console.log(` VENTA DENEGADA. Menor de ${cliente.edad} años no puede ver película de adultos.`);
        }
    }

    console.log("--- Venta finalizada: Cupo lleno ---");
}

// --- EJECUCIÓN ---
iniciarVenta();