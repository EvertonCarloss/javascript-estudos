// e - serve para inserir a quantidade de zeros. Aceita até 15 digitos.
let idade = 2e10;

console.log(idade);

/* OPERADORES ARITMÉTICOS

- Soma +
- Subtração -
- Multiplicação *
- Divisão /
- Expoente **
- Modulo % resto da divisão


*/

let soma = 2 + 2,
  subtracao = 2 - 3,
  multiplicacao = 2 * 2,
  divisao = 2 / 2,
  modulo = 2 % 4;
console.log(soma, subtracao, multiplicacao, divisao, modulo);

// Sempre que somamos uma um número com uma string, se torna uma string.
let stringSoma = 2 + '2';
// Vai concatenar
console.log(stringSoma);

// Função em js que verificar se é NaN (Não é um número), utilizamos o método isNaN()
let notNumber = 'Olá' + 2;
console.log(isNaN(notNumber));

/* Ordem de precedentes

Começa por multiplicação e divisão, depois por soma e subtração.
Parenteses é utilizado para priorizar uma expressão.

*/

let ordemPrecedentes = 10 + 10 + 20 + (30 * 4) / 2 + 10;
console.log(ordemPrecedentes);

/* Operadores Aritméticos Unários

Serve para incrementar e decremento

incremento utilizamos o +
decremento utilizamos o -

Inserindo o + e - tenta transformar o valor seguinte em número.

Ex:

let idade = "28"; // String
+idade; // Number

O sinal de - converter e negativa o número

Ex:

let idade = "28"; String
-idade = -28 


*/

let incremento = 5;
console.log(++incremento);
let decremento = 5;
console.log(--decremento);
