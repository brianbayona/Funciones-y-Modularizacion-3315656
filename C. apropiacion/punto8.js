function esMayorDeEdad(edad) { // Función para verificar si una persona es mayor de edad//
    return edad >= 18; // Retorna true si la edad es 18 o más, de lo contrario retorna false//
}

function filtrarMayores(listaPersonas) {  // Función para filtrar personas mayores de edad de una lista//
    return listaPersonas.filter(persona => esMayorDeEdad(persona.edad));    // Utiliza el método filter para crear una nueva lista con las personas que cumplen la condición de ser mayores de edad//
}

function ejecutarRegistro() {  // Función principal para ejecutar el registro de personas y mostrar los admitidos//
    // Simulamos la entrada de datos de 5 personas  // Cada persona tiene un nombre y una edad//
    const personas = [ // Lista de personas con sus nombres y edades//
        { nombre: "Ana", edad: 25 },  
        { nombre: "Pedro", edad: 15 },
        { nombre: "Lucía", edad: 18 },
        { nombre: "Carlos", edad: 12 },
        { nombre: "Marta", edad: 30 }
    ];

    console.log("--- Personas admitidas (18+ años) ---"); // Imprime un encabezado para la sección de personas admitidas//
    
    const admitidos = filtrarMayores(personas);  // Llama a la función para filtrar las personas mayores de edad y almacena el resultado en la variable admitidos// 

    if (admitidos.length > 0) {     // Verifica si hay personas admitidas en la lista//
        admitidos.forEach(p => {  // lee la lista de personas admitidas y muestra su nombre y edad//
            console.log(` Nombre: ${p.nombre} | Edad: ${p.edad}`);  // Utiliza el método forEach para iterar sobre la lista de admitidos y mostrar su información en la consola//
        });
    } else {
        console.log("No hay personas mayores de edad en la lista.");
    }
}

// Ejecución
ejecutarRegistro();