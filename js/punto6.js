let boletosVendidos = 0; //declaramos una variable para llevar el conteo de los boletos vendidos
const LIMITE_BOLETOS = 15; //definimos una constante para el límite de boletos disponibles
console.log("--- Inicio de la venta de boletos ---");//MENSAJE DE INICIO
while (boletosVendidos < LIMITE_BOLETOS) {//iniciamos un ciclo que se ejecutará mientras el númerode boletos vendidos sea menor al límite
  let edadComprador = Math.floor(Math.random() * 30) + 10; //genero edad ente 10 y 39 años
  let esPeliculaAdultos = Math.random() < 0.5;//genera un valor booleano para adulto o no adulto
  console.log(`No se vendió boleto a una persona de ${edadComprador} años para película de adultos.`);//MENSAJE DE NO VENTA
}
if (edadComprador < 18 && esPeliculaAdultos) {//si es menor no se le vende boleto para película
  boletosVendidos++; //Si el programa no entró al if (porque la venta fue legal), llegará a esta línea. El operador ++ suma 1 a nuestra variable
  console.log(`VENTA EXITOSA. Boletos vendidos: ${boletosVendidos}/${LIMITE_BOLETOS}`);//Imprime la confirmación de la venta y el estado actual del inventario
}

console.log("--- Venta finalizada: Cupo lleno ---");