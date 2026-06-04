// Adiciona pacote para entrada de dados;
const prompt = require('prompt-sync')();

// Lê os números;
const num1 = Number(prompt('1º Número:'));
const num2 = Number(prompt('2º Número:'));

// Processamento, calculo da soma;
const soma = num1 + num2;

// Saída;
console.log(`Soma é: ${soma}`);
