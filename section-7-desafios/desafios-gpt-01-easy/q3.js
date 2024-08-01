//ENTRADA
const propBarata = 90000
const propModerada = 300000
const propCara = 600000

//PROCESSAMENTO
function classificaProp(propPrice) {
    if(propPrice <= 100000){
        return "Barata"
    } else if( propPrice === 100000 || propPrice <= 500000){
        return "Moderada"
    } else {
        return "Cara"
    }
}

//SAIDA
console.log(classificaProp(propBarata))
console.log(classificaProp(propModerada))
console.log(classificaProp(propCara))

