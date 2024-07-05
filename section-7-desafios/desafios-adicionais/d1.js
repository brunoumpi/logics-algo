

//ENTRADA
const Joyce = 27
const Gigi = 10
//PROCESSAMENTO

function votar(idadePessoa){
    if( idadePessoa >= 18 ){
        return `Ja pode votar pois voce tem ${idadePessoa}`
    } else if( idadePessoa >= 75 ){
        return `Voto facultativo pois voce tem ${idadePessoa}`
    } else{
        return `Nao pode votar pois voce tem ${idadePessoa}`
    }
}

//SAIDA

console.log(votar(Gigi))