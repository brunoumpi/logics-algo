//Sao lacos que vao repetir nosso determinado codigo com base em alguma condicao/acao

// FOR: E usado quando voce sabe quantas vezes deseja repetir um bloco de codigo

/*for (let i = 0; i < 5; i++) {
    console.log("PASSOU AQUI " + i)
}*/

const numero = 6

let valor = 10

for (let i = 0; i <= numero; i++){
    console.log("NUMERO SENDO PASSADO " + i)
    valor = valor + 5
}

console.log(valor)