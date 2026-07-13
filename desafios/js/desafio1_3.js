/*

Desafio 3: Leia dois números e uma operação (+, -, *, /). Calcule e exiba o resultado. Se for divisão por zero, exiba mensagem de erro. Use switch/case para a operação.

*/

// Acessando o form;
const form = document.querySelector('form');
// Saída;
const saidaResposta = document.querySelector('#resultado');

// Evento ao clicar em "Resultado operação";
form.addEventListener('submit', (e) => {
  // Evita recarregamento da página;
  e.preventDefault();

  // Entrada;
  const primeiroNumero = Number(form.numeroUm.value);
  const segundoNumero = Number(form.numeroDois.value);
  const operacao = form.inOperacao.value;
  let resultadoOperacao = 0;
  // Condição, processamento e Saída;
  switch (operacao) {
    case '+':
    case 'Soma':
    case 'soma':
      resultadoOperacao = primeiroNumero + segundoNumero;
      saidaResposta.innerText = `O resultado da ${operacao} entre ${primeiroNumero} e ${segundoNumero} = ${resultadoOperacao}`;
      break;

    case '-':
    case 'subtracao':
    case 'Subtracao':
      resultadoOperacao = primeiroNumero - segundoNumero;
      saidaResposta.innerText = `O resultado da ${operacao} entre ${primeiroNumero} e ${segundoNumero} = ${resultadoOperacao}`;
      break;

    case '*':
    case 'multiplicacao':
    case 'Multiplicacao':
      resultadoOperacao = primeiroNumero * segundoNumero;
      saidaResposta.innerText = `O resultado da ${operacao} entre ${primeiroNumero} e ${segundoNumero} = ${resultadoOperacao}`;
      break;

    case '/':
    case 'divisao':
    case 'Divisao':
      if (segundoNumero === 0) {
        saidaResposta.innerText = `Erro: Divisão por Zero!`;
      } else {
        resultadoOperacao = primeiroNumero / segundoNumero;
        saidaResposta.innerText = `O resultado da ${operacao} entre ${primeiroNumero} e ${segundoNumero} = ${resultadoOperacao}`;
      }

      break;

    default:
      saidaResposta.innerText = `Operação invalida!`;
  }
});
