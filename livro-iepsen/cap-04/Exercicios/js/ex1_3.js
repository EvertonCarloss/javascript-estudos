/* Elaborar um programa para simular um parquímetro, o qual leia o valor
de moedas depositado em um terminal de estacionamento rotativo. O
programa deve informar o tempo de permanência do veículo no local e o
troco (se existir), como no exemplo da Figura 4.9. Se o valor for inferior ao
tempo mínimo, exiba a mensagem: “Valor Insuficiente”. Considerar os
valores/tempos da Tabela 4.6 (o máximo é 120 min). */

// Acessando o form;
const form = document.querySelector('form');
// Saída resultado;
const resultado = document.querySelector('#resultado');
const trocoSaida = document.querySelector('#troco');

// Evento ao ser clicado;
form.addEventListener('submit', (e) => {
  // Evitar recarregamento da página;
  e.preventDefault();

  // Entrada;
  const valor = Number(form.inValor.value);
  let valorTroco = 0;
  // Processamento e saída;
  if (valor < 1.0) {
    resultado.innerText = `Valor Insuficiente!`;
    trocoSaida.innerText = '';
  } else if (valor >= 1.0 && valor < 1.75) {
    valorTroco = valor - 1.0;
    resultado.innerText = `Tempo: 30 min!`;
    trocoSaida.innerText = `Troco R$: ${valorTroco.toFixed(2)}`;
  } else if (valor >= 1.75 && valor < 3.0) {
    valorTroco = valor - 1.75;
    resultado.innerText = `Tempo: 60 min!`;
    trocoSaida.innerText = `Troco R$: ${valorTroco.toFixed(2)}`;
  } else if (valor >= 3.0) {
    valorTroco = valor - 3.0;
    resultado.innerText = `Tempo: 120 min!`;
    trocoSaida.innerText = `Troco R$: ${valorTroco.toFixed(2)}`;
  }
});
