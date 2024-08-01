//ENTRADA


//PROCESSAMENTO
function wordCount(word){
    // Verifica se a string está vazia ou é apenas composta por espaços em branco
    if (word.trim() === "") {
        return 0;
    }

    // Divide a string em palavras usando espaço como delimitador
    let words = word.trim().split(/\s+/);

    // Retorna o número de palavras
    return words.length;
}

//SAIDA

console.log(wordCount("Olá mundo"));          // Output: 2
console.log(wordCount("   Muitas  palavras  aqui ")); // Output: 3
console.log(wordCount(""));                   // Output: 0
console.log(wordCount("     "));              // Output: 0
console.log(wordCount("Uma palavra"));        // Output: 2
console.log(wordCount("Contando as palavras!")); // Output: 3