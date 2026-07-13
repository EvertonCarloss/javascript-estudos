/* 
Desafio 2: Leia o salário de um funcionário e calcule o imposto. (Até R$2.000: isento. R$2.001 a R$3.000: 7,5%. R$3.001 a R$4.500: 15%. Acima de R$4.500: 22,5%.)

*/

// Acessando o form;
const form = document.querySelector('form');
// Saída resposta;
const saidaImposto = document.querySelector('#imposto');
const saidaResposta = document.querySelector('#salarioImposto');

// Evento ao submit ser clicado;
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Entrada;
  const salario = Number(form.inSalario.value);

  // Condição, processamento e Saída;
  if (salario <= 2000) {
    saidaImposto.innerText = `Isento!`;
    saidaResposta.innerText = `SalárioR$: ${salario.toFixed(2)}`;
  } else if (salario > 2000 && salario <= 3000) {
    let imposto = salario * 0.075;
    let salarioComImposto = salario - imposto;
    saidaImposto.innerText = `Imposto de 7,5%! R$ ${imposto.toFixed(2)}`;
    saidaResposta.innerText = `Salário com Imposto R$: ${salarioComImposto.toFixed(2)}`;
  } else if (salario > 3000 && salario <= 4500) {
    let imposto = salario * 0.15;
    let salarioComImposto = salario - imposto;
    saidaImposto.innerText = `Imposto de 15%! R$: ${imposto.toFixed(2)}`;
    saidaResposta.innerText = `Salário com Imposto R$:${salarioComImposto.toFixed(2)}`;
  } else if (salario > 4500) {
    let imposto = salario * 0.225;
    let salarioComImposto = salario - imposto;
    saidaImposto.innerText = `Imposto de 22.5%! R$ ${imposto.toFixed(2)}`;
    saidaResposta.innerText = `Salario com Imposto R$: ${salarioComImposto.toFixed(2)}`;
  }
});
