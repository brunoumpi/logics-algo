/*
    > Crie uma lista de contatos onde deve ter o nome da pessoa e o telefone
    > Como encontrar um numero dentro da lista de contatos pesquisando pelo nome?
*/

// 1- ENTRADA

const contatos = [
    {nome: "Bruno", telefone: "(39) 351 643 1274"},
    {nome: "Joyce", telefone: "(39) 351 153 2343"}
]

// 2- PROCESSAMENTO
function procuraNome(nome){
    const contatoEncontrado = contatos.find((contato) => contato.nome === nome);

    if(contatoEncontrado){
        return `Usuario encontrado, o numero é: ${contatoEncontrado.telefone}`
    }else{
        return `Nome nao encontrado`
    }
}
// 3- SAIDA
const buscaNome = procuraNome("Joyce")
console.log(buscaNome);
