const prompt = require('prompt-sync')();// Importamos el módulo prompt-sync para poder solicitar datos al usuario//

/// Programa para validar credenciales de usuario ///

const USUARIO_CORRECTO = "admin";// Definimos una constante para el usuario correcto//
const CLAVE_CORRECTA = "1234";// Definimos una constante para la clave correcta//

function validarCredenciales(user, pass) {  // Función que valida las credenciales ingresadas por el usuario//
    return user === USUARIO_CORRECTO && pass === CLAVE_CORRECTA; // Retorna true si el usuario y la clave son correctos, de lo contrario retorna false//
}

function iniciarSesion() { // Función principal para iniciar sesión//
    const MAX_INTENTOS = 3;  // Definimos una constante para el número máximo de intentos permitidos//
    let intentoActual = 1;  //  Variable para contar el número de intentos realizados//
    let accesoConcedido = false;  // Variable para indicar si el acceso ha sido concedido//
    while (intentoActual <= MAX_INTENTOS && !accesoConcedido) { // Bucle que se ejecuta mientras el número de intentos sea menor o igual al máximo permitido y el acceso no haya sido concedido//
        let user = prompt(`Intento ${intentoActual} de ${MAX_INTENTOS}\nIngrese su usuario:`); // Solicitamos al usuario que ingrese su nombre de usuario, mostrando el número de intento actual y el máximo permitido//
        let pass = prompt(`Ingrese su contraseña:`);    // Solicitamos al usuario que ingrese su contraseña//