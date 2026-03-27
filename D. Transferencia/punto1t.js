for (let n = 2; n <= 50; n++) {
    let esPrimo = true;
    
    // Revisamos si n tiene divisores aparte de 1 y él mismo
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(n);
    }
}
