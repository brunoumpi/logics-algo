/*
## Desafio 1 -
-> Crie um array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", "backend", "mobile") 

-> Você precisa remover o cargo "backend" da lista de cargos pois esse cargo não está mais disponivel na empresa.

### FEITO
*/

// ENTRADA
let cargos = ["fullstack", "frontend", "backend", "mobile"]

// PROCESSAMENTO
cargos.splice(2,1)

// SAIDA
console.log(cargos)