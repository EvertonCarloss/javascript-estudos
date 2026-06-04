// 1 -  Qual o resultado da seguinte expressão:
let total = 10 + (5 * 2) / 2 + 20;
console.log(total);
// 35;

// 2 - Crie duas expressões que retornem NaN;
let notNumber = 'Olá' * 2;
notNumberDois = 100 % '100 reais';
console.log(notNumber, notNumberDois);

//  3 - Somar a string "200" com o número 50 e retornar 250;
let somarString = +'200' + 50;
console.log(somarString);

//  4 - Incremente o número 5 e retorne o seu valor incrementado;
let incremento = 5;
console.log(incremento++);
console.log(incremento);

/* 5 - Como dividir o peso por 2?
let numero = '80',
  unidade = 'kg',
  peso = numero + unidade,
  pesoPorDois = peso / 2;

 */

let numero = +'80' / 2,
  unidade = 'kg',
  peso = numero + unidade;
console.log(peso);
