// Adiciona o pacote ao programa;
const prompt = require('prompt-sync')();

// Entrada;
const pesoKg = Number(prompt('Peso da Ração(kg):'));
const consumo = Number(prompt('Consumo Diário(gr):'));
// Variável para auxiliar pesoGr
const pesoGr = pesoKg * 1000;

// Processamento;

// Calculo;
const duracao = Math.floor(pesoGr / consumo);
const sobra = pesoGr % consumo;

// Saída;
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);
