/* Elaborar um programa que leia um número – que deve ser uma centena.
Calcule e exiba a centena invertida. Caso o número não seja uma centena,
exiba mensagem.
*/

// Adicionar pacote prompt
const prompt = require('prompt-sync')();
// Lê o número
const numero = Number(prompt('Número (centana);'));
// Processamento
if (numero < 100 || numero >= 1000) {
  console.log('Erro... deve ser uma centena');
  return;
}
// Obtém o primeiro número
const numeroUm = Math.floor(numero / 100);
// O que sobra (dezena)
const sobra = numero % 100;
// Obtém o segundo número
const numeroDois = Math.floor(sobra / 10);
// Obtém o terceiro número
const numeroTres = sobra % 10;
// Exibe o número invertido
console.log(`Invertido: ${numeroTres}${numeroDois}${numeroUm}`);
