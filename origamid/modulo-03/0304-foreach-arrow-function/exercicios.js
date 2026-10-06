/* EXERCÍCIO 1 - Mostre no console cada parágrafo do site. */
const paragrafo = document.querySelectorAll('p');

paragrafo.forEach((i) => console.log(i));

/* EXERCÍCIO 2 - Mostre o texto dos parágrafos no console */
paragrafo.forEach((i) => console.log(i.innerText));

/* EXERCÍCIO 3 - Como corrigir os erros abaixos: */

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
