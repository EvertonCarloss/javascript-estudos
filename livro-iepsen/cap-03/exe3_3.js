// Adiciona o pacote ao programa;
const prompt = require('prompt-sync')();

// Entrada;
const salario = Number(prompt('Salário R$:'));
const tempo = Number(prompt('Tempo (anos):'));

// Processamento;

// Calcula o quadriênios;
const quadrienios = Math.floor(tempo / 4);
// Calculo do acrescimo;
const acrescimo = (salario * quadrienios) / 100;

// Saída;
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`);
