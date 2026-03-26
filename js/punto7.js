let suma = 0;//creamos una variable para almacenar la suma de los números

console.log("--- Iniciando suma del 1 al 100 con interrupción ---");//MENSAJE DE INICIO
for (let i = 1; i <= 100; i++) {//el contador empieza en 1 y va aunmentando hasta 100

  if (i > 90 && i % 2 === 0) {// Verificamos si es mayor a 90 Y es par (el residuo de dividir entre 2 es 0)
    console.log(`Ciclo interrumpido en el número: ${i}`);
    break;// Si se cumple la condición, se imprime el mensaje y se interrumpe el ciclo con break
  }
  suma += i; // Sumamos el número actual al total
  console.log(`Sumando: ${i} | Total actual: ${suma}`);// Imprime el número que se está sumando y el total acumulado hasta ese momento
}

console.log(`Resultado final de la suma: ${suma}`);// Imprime el resultado final de la suma después de que el ciclo ha terminado o ha sido interrumpido