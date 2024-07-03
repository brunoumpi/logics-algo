/*
## Desafio 3
Crie um array com esses numeros: [5, 15, 23, 2 ]

- Você deve devolver qual é a soma de todos esses numeros usando foreach
*/


//ENTRADA
const arrayNumeros = [5, 15, 23, 2]
let somaTotal = 0

//PROCESSAMENTO
arrayNumeros.forEach((number) => {
    // 0      = 0   +   5
    // 5      = 5   +   15
    // 20     = 20  +   23
    // 43     = 43  +   2
    // FINAL DO LOOP SOMATOTAL TEM O VALOR DE 45
    somaTotal += number  // OU    somaTotal = somaTotal + number
})

//SAIDA
console.log(`A soma total da lista é ${somaTotal}`)