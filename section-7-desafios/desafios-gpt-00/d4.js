//ENTRADA
const arrNumeros = [5, 10, 15, 20, 25, 30]

//PROCESSAMENTO
function mediaNumbers(arrNumbers){
    const qtdNumbers = arrNumbers.length

    const somaNumbers = arrNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })

    return somaNumbers / qtdNumbers

}
//SAIDA
console.log(mediaNumbers(arrNumeros))