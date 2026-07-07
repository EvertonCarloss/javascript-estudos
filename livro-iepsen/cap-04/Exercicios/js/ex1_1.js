// Acessar o form do dccumento
const form = document.querySelector('form');
// Saída do resultado
const saidaResultado = document.querySelector('h3');

// Evento ao ser clicado;
form.addEventListener('submit', (e) => {
  // Evita o recarregamento
  e.preventDefault();

  // Entrada
  const numero = Number(form.inNumero.value);
  // Condição e Saída
  // const saidaResultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
  if (numero % 2 === 0) {
    saidaResultado.innerText = `${numero} é Par`;
  } else {
    saidaResultado.innerText = `${numero} é Ímpar`;
  }
});
