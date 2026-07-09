/*
Elaborar um programa que leia três lados e verifique se eles podem ou
não formar um triângulo. Para formar um triângulo, um dos lados não
pode ser maior que a soma dos outros dois. Caso possam formar um
triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados
iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes).
 */

// Acessar o form;
const form = document.querySelector('form');
// Saída;
const ladoFormacao = document.querySelector('#lado');
const tipoFormacao = document.querySelector('#tipo');

// Evento ao clicar;
form.addEventListener('submit', (e) => {
  // Evitar recarregamento;
  e.preventDefault();

  // Entrada;
  const ladoA = Number(form.ladoA.value);
  const ladoB = Number(form.ladoB.value);
  const ladoC = Number(form.ladoC.value);

  // Condição, processamento e Saída;

  if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    ladoFormacao.innerText = 'Lados podem formar um triângulo!';

    if (ladoA === ladoB && ladoB === ladoC) {
      tipoFormacao.innerText = 'Tipo: Equilátero (3 lados iguais)';
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      tipoFormacao.innerText = 'Tipo: Isósceles (2 lados iguais)';
    } else {
      tipoFormacao.innerText = 'Tipo: Escaleno (3 lados diferentes)';
    }
  } else {
    ladoFormacao.innerText = 'Lados não podem formar um triângulo!';
    tipoFormacao.innerText = 'Tipo: N/A';
  }
});
