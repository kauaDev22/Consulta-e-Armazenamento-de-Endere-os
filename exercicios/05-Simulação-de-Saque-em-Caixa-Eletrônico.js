function caixa(valor) {
    const notas = [100, 50, 20, 10, 5, 2];
    const moedas = [1];
    const resultado = [];

    for (let i = 0; i < notas.length; i++) {
        let quantidade = Math.floor(valor / notas[i]);
        if (quantidade > 0) {
            resultado.push(`${quantidade} nota(s) de ${notas[i]}`);
            valor -= quantidade * notas[i];
        }
    }

    for (let i = 0; i < moedas.length; i++) {
        let quantidade = Math.floor(valor / moedas[i]);
        if (quantidade > 0) {
            resultado.push(`${quantidade} moeda(s) de ${moedas[i]}`);
            valor -= quantidade * moedas[i];
        }
    }

    resultado.forEach(item => console.log(item));
}

caixa(130);