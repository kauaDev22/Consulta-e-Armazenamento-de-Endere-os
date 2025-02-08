function buscaBinaria (lista, item){
     let low = 0
     let high = lista.length - 1

     while(low <= high){
        let mid = Math.floor((low + high)) / 2
        let kick = lista[mid]
        if (kick === item){
            return mid
        }
        if (kick > item){
            high = mid - 1
            
        }else {
            low = mid + 1
        }
        return null
     }

}

let lista = [5,12,18,23,45,70,89]
console.log(buscaBinaria(lista, 23))