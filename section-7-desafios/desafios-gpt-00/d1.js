function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Exemplos de uso
console.log(isPrime(29)); // Deve retornar true
console.log(isPrime(30)); // Deve retornar false
