/*
## Desafio 4
Crie um array com esses numeros: [6, 12, 5, 9, 14, 27]

- Você deve devolver um array com todos os numeros que são multiplos de 3
*/

const numeros = [6, 12, 5, 9, 14, 27]

const numerosMultiplos = [] //Criando variavel que ira atribuir valores dos multiplos

numeros.forEach((numero) => {
    if(numero % 3 === 0){ //Se o resto da divisao do numero for === 0 quer dizer entao que ele é um multiplo
        numerosMultiplos.push(numero) //Colocamos em nosso array vazio os valores dos numeros divisiveis.
    }
})

console.log(`Lista de numeros multiplos de (3): ${numerosMultiplos}`)