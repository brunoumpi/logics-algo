
// OBJETOS COM PROPRIEDADES ANINHADAS
const pessoa = {
    nome: "Bruno",
    idade: 28,
    cargo: "Full Stack",
    address: {
        rua: "Avenida dev 123456",
        complemento: "Em frente a praça",
        cep: 15815058
    }
}

console.log(pessoa.address?.numero)