/*
    > Crie um carrinho de compras com lista de produtos onde cada produto tem um nome e preco: 
    > Calcule o total do carrinho
*/

const cart = [
    {nome: "Celular", preço: 3000},
    {nome: "Calça", preço: 300},
    {nome: "Tenis", preço: 700},
]

const cart2 = [
    {nome: "Iphone 14", preço: 6000},
    {nome: "Macbook", preço: 1000},
]

function calcularTotalCart(carrinho){
    let total = 0
    
    cart.forEach((product) => {
        total += product.preço
    })

    return `O total do carrinho ficou: ${carrinho}`
}

const totalCart2 = calcularTotalCart(cart2)