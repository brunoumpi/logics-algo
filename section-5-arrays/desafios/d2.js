/*
## Desafio 2 - 
-> Crie um array com os nomes abaixo:
["Alice", "Lucas", "Carol", "David"];

-> Você está procurando por um nome chamado Henrique caso o nome esteja na lista mostre no console
qual a posição em que esse nome está na sua lista.
-> Caso não encontre esse nome mostre no console o nome procurado e fale que não foi encontrado na lista
*/

// ENTRADA
const nomes = ["Alice", "Lucas", "Carol", "David"]

const pesquisaNome = "Henrique"
const verificaNomes = nomes.includes(pesquisaNome)

// PROCESSAMENTO E SAIDA
if(verificaNomes){
    console.log(nomes.indexOf("Henrique"))
}else{
    console.log(`O nome ${pesquisaNome}, nao existe dentro da lista`)
}
