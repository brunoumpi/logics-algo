/*
    > Criar um algoritmo de pilha
    - Devera ter a funcao para retornar o tamanho da pilha.
    - Funcao para adicionar um elemento na pilha.
    - Funcao para retornar qual é o ultimo elemento da pilha.
    - Funcao para remover o ultimo elemento da pilha e retornar qual foi o elemento removido.
    - Funcao para limpar a pilha e zerar ela.
*/

//ENTRADA
let pilha = [1, 2, 3, 4, 5]

//PROCESSAMENTO
function pilhaSize(pilha){
    return pilha.length
}

function pilhaAdd(pilha, element){
    return pilha.push(element)
}

function pilhaLastElement(pilha){
    return pilha[pilha.length - 1]
}

function pilhaRemoveLast(pilha){
    const removedElement = pilha.pop()
    return `O Ultimo elemento removido foi: ${removedElement}`
}

function pilhaClear(pilha){
    return pilha.length = 0
}

//SAIDA
console.log(`Tamanho da pilha: ${pilhaSize(pilha)}`);
pilhaAdd(pilha, 6);
console.log(`Pilha após adicionar elemento: ${pilha}`);
console.log(`Último elemento da pilha: ${pilhaLastElement(pilha)}`);
console.log(pilhaRemoveLast(pilha));
console.log(`Pilha após remover elemento: ${pilha}`);
pilhaClear(pilha);
console.log(`Pilha após limpar: ${pilha}`);