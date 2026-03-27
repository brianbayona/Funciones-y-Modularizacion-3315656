function esPar(numero) { //creamos la function para saber si el numero es par//
    return numero % 2 === 0;
}

// Export for testing (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = esPar;
} //retorna true si el numero es par, de lo contrario retorna false//