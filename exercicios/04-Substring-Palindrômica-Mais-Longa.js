function palindromeMaisLongo(s){
    if(s === null || s.length < 1)return ""
    let inicio = 0
    let fim = 0

    for(let i = 0; i < s.length; i++){
        let len1 = expandirPertoDoCentro(s, i, i) // iterando para palindromos de tamanho impar
        let len2 = expandirPertoDoCentro(s,i, i + 1) // iterando para palindromos de tamanho par
        let len = Math.max(len1, len2) //retornando maior palindromo

        if(len > fim - inicio){
            inicio = i - Math.floor((len - 1) / 2) //pegando os valores a esquerda da string
            end = i + Math.floor(len/2) // pegando os valores da direita da string
        }
    }
    return s.substring(inicio, fim + 1)
}

function expandirPertoDoCentro(s, esquerda, direita){
    while(esquerda >= 0 && direita < s.length && s[esquerda] === s[direita]){
        esquerda--
        direita++
    }
    return direita - esquerda - 1
}

function main(){
    const entrada = "dedad"
    const result = palindromeMaisLongo(entrada)
    console.log(result)
}

main()