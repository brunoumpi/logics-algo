// Functions com parametros

function mostraNome(nome) {
    console.log(`Seja bem vindo ${nome} ao sistema`)
}

//mostraNome("Bruno Vittoria")

const nota1 = 8
const nota2 = 4
const nota3 = 7
const nome = "Bruno"

function calculoMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    return `O aluno ${nome} teve a media de ${media}`;
}

const mediaMatheus = calculoMedia(nota1, nota2, nota3, nome)
console.log(mediaMatheus);

const mediaFulano = calculoMedia(10, 5, 6, "Bruno Vittoria")
console.log(mediaFulano)