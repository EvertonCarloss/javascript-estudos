/*

A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada
pessoa tem direito a levar um peixe. Peixes extras custam 12,00. Elabore
um programa que leia o número de pessoas de uma família que foram ao
clube e o número de peixes obtidos na pescaria. Informe o valor a pagar.


*/

// Adiciona o pacote prompt-sync
const prompt = require('prompt-sync')();

// Entrada;
const pessoas = Number(prompt('Nº De Pessoas: '));
const peixes = Number(prompt('Nº De Peixes: '));
// Variável Pagar;
let pagar;
// Condição;
if (peixes <= pessoas) {
  pagar = pessoas * 20;
} else {
  pagar = pessoas * 20 + (peixes - pessoas) * 12;
}
// Saída;
console.log(`Pagar R$: ${pagar.toFixed(2)}`);
