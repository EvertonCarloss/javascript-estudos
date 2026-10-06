/* EXERCÍCIO 1 - Mostre no console cada parágrafo do site. */
const paragrafo = document.querySelectorAll('p');

paragrafo.forEach((i) => console.log(i));

/* EXERCÍCIO 2 - Mostre o texto dos parágrafos no console */
paragrafo.forEach((i) => console.log(i.innerText));

/* EXERCÍCIO 3 - Como corrigir os erros abaixos: */

const imagens = document.querySelectorAll('img');

imagens.forEach((item, index) => {
  console.log(item, index);
});

let iTres = 0;
imagens.forEach(() => {
  console.log(i++);
});

imagens.forEach(() => i++);
