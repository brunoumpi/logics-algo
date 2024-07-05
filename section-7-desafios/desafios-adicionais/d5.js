//ENTRADA
const pessoas = [
    {nome: "Bruno", idade: 25, programador: true},
    {nome: "Joyce", idade: 27, programador: false},
    {nome: "Dalila", idade: 23, programador: false},
    {nome: "Scooby", idade: 8, programador: false}
]

//PROCESSAMENTO
function arrayIdades(array){

    const novoArray = array.filter((pessoa) => pessoa.idade >= 18);

    return novoArray
}

//SAIDA
console.log(arrayIdades(pessoas))