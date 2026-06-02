/* 7 Tipos de dados

 - Todos são primitivos exceto os objetos.

*/

// string;
let nome = 'Everton';

// Number;
let idade = 28;

// Boolean;
let possuiFaculdade = true;

// Undefined;
let time;

// Null;
let comida = null;

// Symbol;
let simbolo = Symbol();

// Object
let novoObjeto = {};

/* Para sabermos o tipo de dado, utilizamos o método TYPEOF */

console.log(typeof nome);

// Ao verificar typeof de null, retorna object.

// Somar uma string;
let sobrenome = 'Carlos';
let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// Somar string com números
// Sempre que somamos uma string com um número, se torna uma string;
let gols = 1000;
let frase = 'Everton fez ' + gols + ' gols';

// Template String
let fraseDois = `Seja bem vindo(a)!`;
console.log(fraseDois);
