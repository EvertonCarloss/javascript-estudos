/*  Elaborar um programa que leia a velocidade permitida em uma estrada
e a velocidade de um condutor. Se a velocidade for inferior ou igual à
permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a
permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da
velocidade permitida, exiba “Multa Grave” */

// Acessar o form;
const form = document.querySelector('form');
// Saída do resultado;
const resultado = document.querySelector('#resultado');

// Evento ao ser clidado;
form.addEventListener('submit', (e) => {
  // Evita o recarregamento da página
  e.preventDefault();

  // Entrada
  const velocidadePermitida = Number(form.inVelocidade.value);
  const velocidadeCondutor = Number(form.inCondutor.value);
  const limiteTolerancia = velocidadePermitida * 1.2;
  // Processamento e saída;
  if (velocidadeCondutor <= velocidadePermitida) {
    resultado.innerText = `Situação: Sem Multa!`;
  } else if (velocidadeCondutor <= limiteTolerancia) {
    resultado.innerText = `Situação: Multa Leve!`;
  } else {
    resultado.innerText = `Situação: Multa Grave!`;
  }
});
