
//ENTRADA
const clientBruno = {
    vipPass: true,
    lastMonthBought: 6
}
const clientJoyce = {
    vipPass: false,
    lastMonthBought: 5
}
const clientGigi = {
    vipPass: true,
    lastMonthBought: 3
}

//PROCESSAMENTO
function discountVerify(client){
    if(client.vipPass === true || client.lastMonthBought >= 6){
        return "Cliente é elegivel!"
    } else {
        return "Cliente nao elegivel!"
    }
}

//SAIDA

console.log(discountVerify(clientJoyce))

