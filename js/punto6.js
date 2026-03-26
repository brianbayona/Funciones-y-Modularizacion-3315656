let boletosVendidos = 0; //declaramos una variable para llevar el conteo de los boletos vendidos
const LIMITE_BOLETOS = 15; //definimos una constante para el límite de boletos disponibles
while (boletosVendidos < LIMITE_BOLETOS) {//iniciamos un ciclo que se ejecutará mientras el númerode boletos vendidos sea menor al límite
  let edadComprador = Math.floor(Math.random() * 30) + 10; //genero edad ente 10 y 39 años
  let esPeliculaAdultos = Math.random() < 0.5;//genera un valor booleano para adulto o no adulto
  if (edadComprador < 18 && esPeliculaAdultos) {//si es menor no se le vende boleto para película
