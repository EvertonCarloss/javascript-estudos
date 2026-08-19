/* WINDOW e DOCUMENT - São os principais objetos do Dom, boa parte da manipulação é geita através dos seus métodos e propriedades. */

/* EXERCÍCIOS */

// 1 - Retorne o url da página atual utilizando o objeto window;
const pagina = window.location.href;
console.log(pagina);

// Selecione o primeiro elemento da página que possua a classe ativo;
const elementoAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador;
const navegador = window.navigator.language;
console.log(navegador);

// 3 - Retorne a largura da página;
const largura = window.innerWidth;
console.log(largura);
