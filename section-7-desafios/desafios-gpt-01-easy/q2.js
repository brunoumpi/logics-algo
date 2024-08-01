//Entrada

const vendasBruno = 1000
const vendasJoyce = 5000
const vendasGigi  = 6000

//Processamento

function calculaCota(vendas) {
    if(vendas <= 1000){
        return `Comissao de 5% pois vendeu ${vendas}`
    } else if (vendas >= 1001 && vendas < 5001){
        return `Comissao de 7% pois vendeu ${vendas}`
    } else{
        return `Comissao de 10% pois vendeu ${vendas}`
    }
}

console.log(calculaCota(vendasJoyce))