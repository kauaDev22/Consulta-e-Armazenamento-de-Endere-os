function ehNumeroPerfeito(num) {
    let soma = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            soma += i;
        }
    }
    return soma === num;
}

// Testando a função com alguns números
console.log(ehNumeroPerfeito(6));  // true, pois 6 é um número perfeito (1 + 2 + 3 = 6)
console.log(ehNumeroPerfeito(28)); // true, pois 28 é um número perfeito (1 + 2 + 4 + 7 + 14 = 28)
console.log(ehNumeroPerfeito(12)); // false, pois 12 não é um número perfeito