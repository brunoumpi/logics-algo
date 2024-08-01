//ENTRADA
const clientes = [
    {nome: "Bruno", idade: 25},
    {nome: "Joyce", idade: 27},
    {nome: "Gigi", idade: 10},
]
//PROCESSAMENTO
function clientesAdultos(clientes){
    const filterClients = clientes.filter((cliente) => {
        return cliente.idade >= 18
    })

    return filterClients
}

//SAIDA
console.log(clientesAdultos(clientes))