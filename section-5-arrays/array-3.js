//SPLICE

/*
    index: A posicao no array onde a operaçao começara.
    Quantidade: O numero de elementos a serem removidos a partir daquela posiçao.
    Adicionar: Elementos que desejamos adicionar naquele index (OPCIONAL)
*/

const numeros = [1, 5, 20, 10]

numeros.splice(1, 2, 30);

//console.log(numeros);

const nomes = ["Lucas", "Bruno", "Matheus", "Joyce"]

const resultadoSplice = nomes.splice(2, 2, "Maria", "Solange")

console.log(resultadoSplice)
console.log('--------------')
console.log(nomes)