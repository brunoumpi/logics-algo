// ENTRADA
const arrProdutos = [
    {nome: "camisa", quantidade: 10},
    {nome: "tenis", quantidade: 20},
    {nome: "bermuda", quantidade: 30},
    {nome: "oculos", quantidade: 40},
]

const novoProduto = {nome: "oculos", quantidade: 10}

// PROCESSAMENTO
function addToInventory(produtos, novoProduto){
    // Encontrar se o produto já existe no inventário
    const produtoExistente = produtos.find(produto => produto.nome === novoProduto.nome);

    if(produtoExistente){
        // Se o produto já existe, atualizar a quantidade
        produtoExistente.quantidade += novoProduto.quantidade;
    } else {
        // Se o produto não existe, adicionar ao inventário
        produtos.push(novoProduto);
    }

    return produtos;
}

// SAÍDA
console.log(addToInventory(arrProdutos, novoProduto));
