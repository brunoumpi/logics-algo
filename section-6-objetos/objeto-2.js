const calculos = {
    soma: function (numero1, numero2){
        return numero1 + numero2
    },
    subtrair: function (numero1, numero2){
        return numero1 - numero2
    }
}

const resultadosSoma = calculos.soma(10,20)
//console.log(resultadosSoma)

const resultadosSubt = calculos.subtrair(20,10)
//console.log(resultadosSubt)

const calculos2 = {
    n1: 15,
    n2: 30,
    soma: function() {
        return this.n1 + this.n2
    },
    subtrair: function(){
        return this.n1 - this.n2
    }
}

calculos2.n1 = 100;
calculos2.n2 = 50; 

const resultado = calculos2.soma()
console.log(resultado)