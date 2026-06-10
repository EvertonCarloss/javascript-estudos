// Referência ao form e elementos;
const form = document.querySelector('form');
const resposta = document.querySelector('h3');

// Evento caso o submit for acionado;
form.addEventListener('submit', (e) => {
  // Evita envio do form;
  e.preventDefault();
  // Entrada;
  const numero = Number(form.inNumero.value);
  // Precessamento;
  const raiz = Math.sqrt(numero);
  if (raiz % 1 == 0) {
    resposta.innerText = `${raiz}`;
  } else {
    resposta.innerText = `Não há raiz exata para ${numero}`;
  }
});
