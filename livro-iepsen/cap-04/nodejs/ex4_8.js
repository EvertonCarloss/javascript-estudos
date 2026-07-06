/* 

    Uma farmácia necessita de um programa que leia o total de uma
compra. Exiba como resposta o nº máximo de vezes que o cliente pode
parcelar essa compra e o valor de cada parcela. Considere as seguintes
condições: a) cada parcela deve ser de, no mínimo, R$ 20,00; b) o número
máximo de parcelas permitido é 6.

*/

// Adicionar o pacote prompt-sync
const prompt = require('prompt-sync')();
// Ler o valor da compra
const valor = Number(prompt('Valor da Compra R$: '));
// Número de parcelas sem condições
const aux = Math.floor(valor / 20);
// Operador ternário
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
// Calculo do valor da parcela
const valorParcela = valor / parcelas;

// Saída
console.log(`Pode pagar em ${parcelas}x de R$:${valorParcela.toFixed(2)}`);
