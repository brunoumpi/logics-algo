//ENTRADA
const numeroPar = 8
const numeroImpar = 9
const numeroImpar2 = 13

//PROCESSAMENTO
function verificaNumero(numero){
    if(numero % 0){
        return `O numero ${numero} é par`
    } else{
        return `O numero ${numero} é impar`
    }
}

//SAIDA
console.log(verificaNumero(numeroImpar2))