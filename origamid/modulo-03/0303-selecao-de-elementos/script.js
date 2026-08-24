// getElementByID - Seleciona e retorna elementos do DOM;

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
// Saída;
console.log(animaisSection);
const contatoSection = document.getElementById('contato');
// Saída;
console.log(contatoSection);

// Retorna null caso não exista;
const naoExiste = document.getElementById('test');

/* CLASSE E TAG - getElementsByClassName e getElementsByTagName, selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.*/

// Seleciona pela classe, retorna uma HTMLCollection;
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByName('grid-section contato');

// Seleciona todas as UL's, retorna uma HtmlCollection;
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento;
console.log(gridSection[0]);

/* SELETOR GERAL ÚNICO - querySelector - Retorna o primeiro elemento que combinar com o seu seletor CSS. */
const animas = document.querySelector('.animais');

/* SELETOR GERAL LISTA - querySelectorAll - Retorna todos os elementos compatíveis com o seletor CSS em uma NodeList */
const animaisDois = document.querySelectorAll('.grid-section');
