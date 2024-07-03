// Do While: A condiçao é verificada apos a execucao do bloco de codigo.

//Tudo que colocarmos dentro do DO sera executado pelo menos uma vez (Mesmo que a condicao n seja atendida, pois ele executa primeiro o codigo dps a cond.)

let contador = 0;

do{
    console.log("Este numero do contador atual é:" + contador)
    contador++
}while(contador <= 0)