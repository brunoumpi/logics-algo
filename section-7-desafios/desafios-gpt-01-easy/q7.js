//ENTRADA
const produtos = [
    {nome: "Camiseta", qtd: 20},
    {nome: "Tenis", qtd: 290},
    {nome: "Oculos", qtd: 0},
    {nome: "Pulseira", qtd: 0},
]
//PROCESSAMENTO

function inStockChecker(produtos){
    const produtosEmStock = produtos.filter((produto) => {
        return produto.qtd > 0
    })

    return produtosEmStock
}

//SAIDA
console.log(inStockChecker(produtos))