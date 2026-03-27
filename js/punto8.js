function esMayorDeEdad(edad) { // Función para verificar si una persona es mayor de edad//
    return edad >= 18; // Retorna true si la edad es 18 o más, de lo contrario false//
}

function filtrarMayores(listaPersonas) { // Función para filtrar personas mayores de edad//
    return listaPersonas.filter(persona => esMayorDeEdad(persona.edad)); // Utiliza el método filter para crear un nuevo array con las personas que cumplen la condición de ser mayores de edad//
}

function ejecutarRegistro() { // Función para ejecutar el registro de personas//
    const personas = [ // Array de objetos que representa a las personas con su nombre y edad//
        { nombre: "Ana", edad: 25 },
        { nombre: "Pedro", edad: 15 },
        { nombre: "Lucía", edad: 18 },
        { nombre: "Carlos", edad: 12 },
        { nombre: "Marta", edad: 30 }
    ];

    console.log("--- Personas admitidas (18+ años) ---"); // Imprime un encabezado para la lista de personas admitidas//
    
    const admitidos = filtrarMayores(personas); // Llama a la función filtrarMayores para obtener solo las personas mayores de edad//
    admitidos.forEach(p => {
            console.log(`Nombre: ${p.nombre} | Edad: ${p.edad}`);
        }); // Imprime el nombre y la edad de cada persona admitida//