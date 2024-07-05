//ENTRADA
const arrayNomes = ["Bruno", "Joyce", "Gigi", "Golden"]
//PROCESSAMENTO

function addElement(array, elemento){
    const elementoExiste = array.includes(elemento)

    if(!elementoExiste){
        const Arr = array.push(elemento)
        return array
    } else{
        return `O elemento ja existe no array!`
    }
}

//SAIDA
console.log(addElement(arrayNomes, "red"))

