//ARRAY DE OBJETOS

const alunos = [
    {
        nome: "Bruno",
        idade: 25,
        cargo: "FullStack",
    },
    {
        nome: "Joyce",
        idade: 27,
        cargo: "Frontend"
    },
    {
        nome: "Dalila",
        idade: 23,
        cargo: "Design"
    },
]

alunos.forEach((aluno) => {
    console.log(`Aluno(a) ${aluno.nome}`)
    console.log(`Aluno(a) ${aluno.idade}`)
    console.log("==============")
})

console.log(alunos[0].nome)