/* FOREACH - Constantemente vamos selecionar uma lista de intes do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach */

const imgs = document.querySelectorAll('img');

let i = 0;
imgs.forEach(function () {
  console.log(i++);
});

/* PARÂMETROS DO FOREACH - O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: ValorAtual, Index e Array. */

const imgs2 = document.querySelectorAll('img');

imgs2.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

/* FOREACH e ARRAY - ForEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array. */

const titulos = document.getElementsByClassName('titulo');
// Transforma em array.
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

/* ARROW FUNCTION - Sintaxe curta em relação a "function expression". Basta remover a palavra chave function e adicionar a fat arrow "=>" após os argumentos. */

const imgs3 = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});

/* Parâmetros e Parênteses */

const imgs4 = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs4.forEach((item) => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs4.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let iDois = 0;
imgs.forEach(() => {
  console.log(i++);
});

/* Return - É possível omitir as chaves {} para uma função que retorna uma linha.*/
const imgs6 = document.querySelectorAll('img');
imgs6.forEach((item) => console.log(item));

// Jeito ainda mais curto
imgs6.forEach((item) => console.log(item));
