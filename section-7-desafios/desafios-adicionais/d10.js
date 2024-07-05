//ENTRADA
let listaDeContatos = [  
    { nome: "João", telefone: "123456789" },  
    { nome: "Maria", telefone: "987654321" },  
    { nome: "Matheus", telefone: "111222333" },  
    { nome: "Matheus Fraga", telefone: "444555666" },  
    { nome: "Ana", telefone: "999888777" } 
];

//PROCESSAMENTO
function listMatheus (array) {
    const resultadoBusca = array.filter((contato) => {
        return contato.nome.includes("Matheus");
    })
    return resultadoBusca
}

//SAIDA

console.log(listMatheus(listaDeContatos))