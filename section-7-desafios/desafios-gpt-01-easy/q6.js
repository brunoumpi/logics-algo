// ENTRADA
const cartItens = [
    { item: "Bolsa", price: 150, quantity: 2 },
    { item: "Oculos", price: 50, quantity: 10 },
    { item: "Tenis", price: 450, quantity: 50 },
];

// PROCESSAMENTO
function cartTotal(cart) {
    // Iniciamos o acumulador com 0
    const somaItens = cart.reduce((acc, curr) => {
        // Para cada item, multiplicamos o preço pela quantidade e adicionamos ao acumulador
        return acc + (curr.price * curr.quantity);
    }, 0); // 0 é o valor inicial do acumulador

    return somaItens;
}

// SAÍDA
console.log(cartTotal(cartItens)); // 23450
