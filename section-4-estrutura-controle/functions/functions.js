// Functions

function mostraNome() {
    console.log("Ola seja bem vindo ao sistema")

    console.log("Aprendendo algoritmos!")
}

function gerarNumeroAleatorio(){
    return Math.random()
}

let numeroGerado = gerarNumeroAleatorio()

//console.log("Numero gerado foi " + numeroGerado)

function dataAtual() {
    const data = new Date()
    return data.toDateString()
}

const data = dataAtual()
console.log(data)