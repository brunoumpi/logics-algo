/*QUESTÃO: A calculadora de Juros Simples utiliza a fórmula de juros 

J = P * i * n

Onde:
J = Juros;
P = Valor presente, principal (capital)
i = Taxa de juros, EX: 0.03 = 3%
n = Número de periodos (Meses);
*/

// 1# ENTRADA
let juros

let patrimonio = 2000

let taxa = 0.05

let periodo = 24

// 2# PROCESSAMENTO

juros = patrimonio * taxa * periodo

// 3# SAIDA

console.log(`Ta me devendo esse valor R$${juros} de juros`)