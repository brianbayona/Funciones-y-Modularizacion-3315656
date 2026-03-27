const prompt = require('prompt-sync')();// Importamos el módulo prompt-sync para poder solicitar datos al usuario//

/// Programa para validar credenciales de usuario ///

const USUARIO_CORRECTO = "admin";// Definimos una constante para el usuario correcto//
const CLAVE_CORRECTA = "1234";// Definimos una constante para la clave correcta//

function validarCredenciales(user, pass) {  // Función que valida las credenciales ingresadas por el usuario//
    return user === USUARIO_CORRECTO && pass === CLAVE_CORRECTA; // Retorna true si el usuario y la clave son correctos, de lo contrario retorna false//
}

function iniciarSesion() { // Función principal para iniciar sesión//
    }
    const MAX_INTENTOS = 3;  // Definimos una constante para el número máximo de intentos permitidos//
    let intentoActual = 1;  //  Variable para contar el número de intentos realizados//
    let accesoConcedido = false;  // Variable para indicar si el acceso ha sido concedido//
    while (intentoActual <= MAX_INTENTOS && !accesoConcedido) { // Bucle que se ejecuta mientras el número de intentos sea menor o igual al máximo permitido y el acceso no haya sido concedido//
        let user = prompt(`Intento ${intentoActual} de ${MAX_INTENTOS}\nIngrese su usuario:`); // Solicitamos al usuario que ingrese su nombre de usuario, mostrando el número de intento actual y el máximo permitido//
        let pass = prompt(`Ingrese su contraseña:`);    // Solicitamos al usuario que ingrese su contraseña//
        if (validarCredenciales(user, pass)) {  // Si las credenciales son correctas, mostramos un mensaje de bienvenida y establecemos accesoConcedido a true para salir del bucle//
            console.log("¡Bienvenido!");// Mostramos un mensaje de bienvenida al usuario//
            accesoConcedido = true; // Establecemos accesoConcedido a true para salir del bucle//
        } else {
            console.log("Usuario o contraseña incorrectos."); // Si las credenciales son incorrectas, mostramos un mensaje de error y aumentamos el contador de intentos//
            intentoActual++; // Incrementamos el contador de intentos para el siguiente intento//
        }
    }
    if (!accesoConcedido) { // Si después de los intentos el acceso no ha sido concedido, mostramos un mensaje de acceso denegado//
        console.log("Acceso denegado. Has agotado tus 3 intentos."); // Mostramos un mensaje de acceso denegado al usuario después de agotar los intentos//
    }
iniciarSesion(); // Llamamos a la función iniciarSesion para comenzar el proceso de validación de credenciales//