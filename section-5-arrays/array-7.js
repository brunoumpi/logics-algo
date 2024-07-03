// FILTER

const numeros = [1, 5, 10, 30, 230]

const numerosFiltrados = numeros.filter((numero) => {
    return numero > 10
})

//console.log(numeros)
//console.log("---------")
//console.log(numerosFiltrados)

const areas = ["fullstack", "frontend", "backend", "mobile"]

const filtro = areas.filter((area) => {
    if(area.length > 7){
        return area
    }
})

//console.log(filtro)

// FIND

const alunos = ["Brunoo", "Joycee", "Scooby"]

const buscaNomes = alunos.find((aluno) => {
    if(aluno.length > 25){
        return aluno
    }
})

//console.log(buscaNomes)

const buscaNomes2 = alunos.find((aluno, index) => {
    if(aluno === "Brunoo"){
        console.log(`O ${aluno} esta na posicao ${index}`)
        return aluno
    }
})