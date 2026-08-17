// Obtém os elementos da página;
const form = document.querySelector('form');
const resp = document.querySelector('h3');

// Evento;
form.addEventListener('submit', (e) => {
  // Evita o envio do form;
  e.preventDefault();
  // Obtém o número informado;
  const numero = Number(form.inNumero.value);
  // String para montar a resposta;
  let resposta = `Entre ${numero} e 1: `;
  // Cria um for decrescente;
  for (let i = numero; i > 0; i = i--) {
    // Resposta acumula número( e virgulas )
    resposta = `${resposta}${i}`;
  }
  resp.innerText = resposta;
});
