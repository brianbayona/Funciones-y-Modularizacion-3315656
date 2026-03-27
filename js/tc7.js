function esPar(numero) { //creamos la function para saber si el numero es par//
    return numero % 2 === 0; //retorna true si el numero es par, de lo contrario retorna false//
    }
function ejecutarContador() { //creamos la function para ejecutar el contador//
    let pares = 0; //inicializamos la variable para contar los numeros pares//
    let impares = 0; //inicializamos la variable para contar los numeros impares//
    const TOTAL_NUMEROS = 10; //definimos una constante para el total de numeros a ingresar//

    console.log("Iniciando el conteo de números...");

    for (let i = 1; i <= TOTAL_NUMEROS; i++) { //creamos un ciclo for para iterar desde 1 hasta el total de numeros//
        // Usamos prompt para recibir datos (en entorno navegador)
        let entrada = prompt(`Ingrese el número ${i} de ${TOTAL_NUMEROS}:`); //pedimos al usuario que ingrese un numero//
        let numero = parseInt(entrada); //convertimos la entrada a un numero entero//
        if (isNaN(numero)) { //is NaN verifica si el valor no es un número, si es así, mostramos un mensaje de error y repetimos el turno//
            alert("Eso no es un número válido. Intenta de nuevo."); //mostramos un mensaje de error//
            i--; // Decrementamos el índice para repetir este turno
            continue;
        }
        if (esPar(numero)) {
            pares++;
        } else {
            impares++;
        }
    }
    //usamos console.log para mostrar los resultados en la consola del navegador porque node no tiene acceso a alertas ni prompts, pero en un entorno de navegador se pueden usar ambos//
    console.log(`--- Resultados ---`);
    console.log(`Total de números pares: ${pares}`);
    console.log(`Total de números impares: ${impares}`);
    
    alert(`Conteo terminado:\nPares: ${pares}\nImpares: ${impares}`);
}
ejecutarContador();