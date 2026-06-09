/* 1 - Verifique se a sua idade é maior do que a de algum parente, dependendo do resultado coloque no console 'É maior', 'É igual'*/

// Entrada;
let idade = 31;
let idadeParente = 30;
// Processamento e Saída;
if (idade > idadeParente) {
  console.log(`É maior`);
} else if (idade === idadeParente) {
  console.log(`É igual`);
} else {
  console.log(`É menor`);
}

/* 2 - Qual o valor é retornado na seguinte expressão?

  var expressao = (5 - 2) && (5 - ' ') && (5 - 2)

*/

let expressao = 5 - 2 && 5 - ' ' && 5 - 2;
console.log(expressao);

/* 3 - Verifique se as seguintes variáveis são Truthy ou Falsy

var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

*/
var nome = 'Andre';
var idadeDois = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idadeDois,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta,
);

/* 4 - Compare o total de habitantes do Brasil com China (Valor em milhões)

var brasil = 207;
var china = 1340;

*/

let brasil = 207;
let china = 1340;

if (brasil > china) {
  console.log(`Brasil tem mais habitantes.`);
} else {
  console.log(`Brasil tem menos habitantes.`);
}

// 5 - O que irá aparecer no console?

if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// 6 - O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
