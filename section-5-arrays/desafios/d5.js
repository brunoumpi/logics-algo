/*
## Desafio 5
Filtrar Palavras com Mais de 5 Letras usando foreach
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

- Você deve devolver um array com todas palavras que possuem mais de 5 letras
 */

const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

const palavrasMaisDe5L = []

palavras.forEach((palavra) => {
    if(palavra.length > 5){
        palavrasMaisDe5L.push(palavra)
    }
})

console.log(`Lista palavras com mais de 5 letras: ${palavrasMaisDe5L}`)
