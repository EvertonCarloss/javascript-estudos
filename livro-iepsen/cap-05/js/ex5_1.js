// Obtém elementos da página;
const frm = document.querySelector('form');
const resp = document.querySelector('pre');

// Evento do form;
frm.addEventListener('submit', (e) => {
  // Evita o envio do form;
  e.preventDefault();
  // Obtém o número informado;
  const numero = Number(frm.inNumero.value);
  // Variável do tipo String, para concatenar a resposta;
  let resposta = '';

  // Cria um laço de repetição;
  for (let i = 1; i <= 10; i++) {
    // Variável resposta vai acumulando os novos conteúdos (nos 2 formatos);
    resposta = resposta + numero + ' x ' + i + ' = ' + numero * i + '\n';
    // Resposta = `${resposta} ${numero} x ${i} = ${numero * i}\n`
  }
  // O conteúdo da tag pre é alterado para exibir a tabuada do número;
  resp.innerText = resposta;
});
