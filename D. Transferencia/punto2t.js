// Creamos la interfaz para leer del usuario
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let repetir = true;

while (repetir) {
    readline.question("Ingresa un número: ", function(numStr) {
        let num = parseInt(numStr);

        if (isNaN(num)) {
            console.log("Eso no es un número válido.");
        } else {
            console.log("Tabla de multiplicar del " + num + ":");
            for (let i = 1; i <= 12; i++) {
                console.log(num + " x " + i + " = " + (num * i));
            }
        }

        readline.question("¿Deseas otra tabla? (s/n): ", function(resp) {
            if (resp.toLowerCase() !== "s") {
                repetir = false;
                console.log("¡Gracias por usar el programa!");
                readline.close();
            }
        });
    });
    break; // Esto rompe el while para que no se haga infinito, la repetición se maneja con readline
}