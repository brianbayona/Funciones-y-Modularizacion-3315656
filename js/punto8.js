function esMayorDeEdad(edad) { // Función para verificar si una persona es mayor de edad//
    return edad >= 18; // Retorna true si la edad es 18 o más, de lo contrario false//
}

function filtrarMayores(listaPersonas) { // Función para filtrar personas mayores de edad//
    return listaPersonas.filter(persona => esMayorDeEdad(persona.edad)); // Utiliza el método filter para crear un nuevo array con las personas que cumplen la condición de ser mayores de edad//
}

function ejecutarRegistro() { // Función para ejecutar el registro de personas//