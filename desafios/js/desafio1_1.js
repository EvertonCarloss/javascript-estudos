/*

Desafio 1: 

Leia a idade de uma pessoa e informe se ela pode votar, se o voto é obrigatório ou opcional. (Menos de 16: não vota. 16-17 e acima de 70: opcional. 18-70: obrigatório.)

*/

// Acessando o form;
const form = document.querySelector('form');
// Saída resposta;
const saidaResposta = document.querySelector('#saidaVotacao');

// Evento ao butão "Verificar Votação" ser clicado;
form.addEventListener('submit', (e) => {
  // Evitar o recarregamento da página quando inserir as informações;
  e.preventDefault();

  // Entrada e solicitação do form;
  const idade = Number(form.inIdade.value);

  // Condições, Processamentos e Saída;
  if (idade < 16) {
    saidaResposta.innerText = `Menor de idade, ainda não pode votar!`;
  } else if ((idade >= 16 && idade <= 17) || idade > 70) {
    saidaResposta.innerText = `Você pode votar, mas, é opcional!`;
  } else if (idade >= 18 && idade <= 70) {
    saidaResposta.innerText = `Voto Obrigatório!`;
  }
});
