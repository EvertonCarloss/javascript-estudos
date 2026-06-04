// Adiciona o pacote ao programa;
const prompt = require('prompt-sync')();

// Entrada dos dados;
const veiculo = prompt('Veículo: ');
const preco = Number(prompt('Preço R$:'));

// Processamento;

// Calcula o valor da entrada;
const entrada = preco * 0.5;
// Calcula o valor das parcelas;
const parcela = (preco * 0.5) / 12;

// Saída;
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12 de R$: ${parcela.toFixed(2)}`);
