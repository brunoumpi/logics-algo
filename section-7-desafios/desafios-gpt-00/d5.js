//ENTRADA
const arrItens = ["Bruno", "bruno", "Joyce", "joyce", "Gigi", "gigi", "Cuscuz", "cuscuz"]

//PROCESSAMENTO
function delCopies(itens){
    const lowerCaseItens = itens.map(item => item.toLowerCase());

    // Filtrar os itens
    const novoArr = itens.filter((item, index) => {
        // Converter o item atual para minúsculas
        const lowerItem = item.toLowerCase();

        // Verificar se o índice do primeiro item igual em minúsculas é o mesmo que o índice atual
        const isFirstOccurrence = lowerCaseItens.indexOf(lowerItem) === index;

        // Manter apenas a primeira ocorrência
        return isFirstOccurrence;
    });

    return novoArr;
}
//SAIDA