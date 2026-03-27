const generarNumeroAleatorio = (min, max) => { // Genera un número aleatorio entre min y max (inclusive)//
    return Math.floor(Math.random() * (max - min + 1)) + min; // Math.random() genera un número decimal entre 0 (inclusive) y 1 (exclusive)//
    };
    const verificarIntento = (secreto, usuario) => { // Compara el número secreto con el número ingresado por el usuario//
    if (usuario === secreto) { // Si el número es correcto, devuelve "¡Correcto!"//
        return "¡Felicidades! Has adivinado el número."; 
    } else if (usuario < secreto) { // Si el número es menor, devuelve "Demasiado bajo"//
        return "El número buscado es MAYOR."; // Si el número es mayor, devuelve "Demasiado alto"//
    } else {
        return "El número buscado es MENOR."; // Si el número es mayor, devuelve "Demasiado alto"//
    }
};

const jugarAdivinador = () => { // Función principal para jugar al adivinador//
    const numeroSecreto = generarNumeroAleatorio(1, 20); // Genera un número secreto entre 1 y 20//
    let intentoUsuario;  // Variable para almacenar el número ingresado por el usuario//
    let acertado = false;  // Variable para controlar si el usuario ha adivinado el número//
alert("¡Bienvenido al Adivinador! He pensado un número entre 1 y 20."); // Mensaje de bienvenida//