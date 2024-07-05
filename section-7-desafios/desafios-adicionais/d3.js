
//ENTRADA
const tempEnviadafrio = 9
const tempEnviadamoderada = 15 
const tempEnviadaquente = 26
//PROCESSAMENTO

function verificaTemperatura (temperatura){
    if(temperatura < 10){
        return `Esta frio, esta fazendo ${temperatura}°`
    } else if (temperatura === 10 || temperatura <= 25 ) {
        return `Esta agradavel o clima, esta fazendo ${temperatura}°`
    } else{
        return `Esta calor! esta fazendo ${temperatura}°`
    }
}
//SAIDA

console.log(verificaTemperatura(tempEnviadafrio))
console.log(verificaTemperatura(tempEnviadamoderada))
console.log(verificaTemperatura(tempEnviadaquente))