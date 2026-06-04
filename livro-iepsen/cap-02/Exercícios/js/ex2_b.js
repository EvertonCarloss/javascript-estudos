/* Elaborar um programa para uma lan house de um aeroporto
– O programa deve ler o valor de cada 15 minutos de uso de um
computador e o tempo de uso por um cliente em minutos. Informe o
valor a ser pago pelo cliente, sabendo que as frações extras de 15
minutos devem ser cobradas de forma integral. */

// Referência aos elementos;
const form = document.querySelector('form');
const minuto = document.querySelector('#inMinuto');
const tempo = document.querySelector('#inTempo');
const saidaResposta = document.querySelector('#inPagar');

// Criando um ouvinte;
form.addEventListener('submit', (e) => {
  // Entrada;
  const valorMinuto = Number(minuto.value);
  const tempoUso = Number(tempo.value);

  // Processamento;
  const blocos = tempoUso / 15;
  // Aqui utilizaremos a função math.ceil para arrendondar o valor para cima.
  const blocosInteiros = Math.ceil(blocos);
  const valorPagar = blocosInteiros * valorMinuto;

  // Saída;
  saidaResposta.innerText = `Valor a Pagar R$: ${valorPagar.toFixed(2)}`;

  // Evita reload;
  e.preventDefault();
});
