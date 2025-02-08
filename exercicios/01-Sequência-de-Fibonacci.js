function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    let a = 0
    let b = 1
    let sequence = [0, 1]

    for(let i=2; i <= n; i++){
        let tmp = a + b
        a = b
        b = tmp
        sequence.push(b)
    }

    return sequence
}
console.log((fibonacci(9)))