const codigoPromocao = 510
let desconto = 0

// SWITCH (CASOS)

switch(codigoPromocao){
    case 10:
        console.log("Produto Tenis")
        desconto = 0.03     //3% 
        break;
    case 500:
        console.log("Produto short")
        desconto = 0.05     //5%
        break;
    case 510:
        console.log("Produto Eletronico")
        desconto = 0.10     //10%
        break;
    default:
        console.log("Produto nao encontrado...")
        break;
}

console.log(`O valor do desconto atual é ${desconto}`)