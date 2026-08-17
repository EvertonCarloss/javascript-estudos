/* OPERADORES DE ATRIBUIÇÃO - Podem funcionar como formas abreviadas */

let x = 5;
let y = 10;

x += y;
x -= y;
x *= y;
x /= y;
x %= y;

/* OPERADORER TERNÁRIO - Abreviação de condicionais com if e else */

let idade = 17;
let podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

/*  EXERCÍCIOS */

// 1 - Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll;
let scroll = 1000;
scroll += 500;
console.log(scroll);

// 2 - Atribua true para a variável darCredito, caso o cliente possua carro e casa. E false caso o contrario.
let possuiCarro = true;
let possuiCasa = true;
let darCredito;

darCredito = possuiCarro && possuiCasa;

console.log(darCredito);
