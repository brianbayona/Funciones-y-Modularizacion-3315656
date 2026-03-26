let contador = 1; // Empezamos en el número 1

while (contador <= 10) {
    let respuesta = prompt("Ingresa el número " + contador + ":");
    let numero = Number(respuesta); // Convertimos el texto a número

    // La condición clave
    if (numero > 50) {
        alert("¡El " + numero + " es mayor que 50!");
    }

    contador = contador + 1; // Pasamos al siguiente turno
}

alert("¡Ya terminamos de revisar los 10 números!");