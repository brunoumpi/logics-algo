//ENTRADA
const domingo = 1
const segunda = 2
const terca = 3
const quarta = 4
const quinta = 5
const sexta = 6
const sabado = 7
//PROCESSAMENTO
function diaSemana(dia){

    switch(dia){
        case 1:
            console.log(`Hoje é domingo!`)
            break;
        case 2:
            console.log(`Hoje é segunda!`)
            break;
        case 3:
            console.log(`Hoje é terca!`)
            break;
        case 4:
            console.log(`Hoje é quarta!`)
            break;
        case 5:
            console.log(`Hoje é quinta!`)
            break;
        case 6:
            console.log(`Hoje é sexta!`)
            break;
        case 7:
            console.log(`Hoje é sabado!`)
            break;
        default:
            console.log(`Dia da semana inexistente!`)
    }
}
//SAIDA
diaSemana(segunda)