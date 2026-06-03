// Cria referência ao form e aos elementos h3 e h4.
const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

// Cria um 'Ouvinte' de evento, acionado quando o botão submit for clicado,
frm.addEventListener('submit', (e) => {
  // Obtém o conteúdo do campo titulo e duração
  const titulo = frm.inTitulo.value;
  const duracao = Number(frm.inDuracao.value);

  // Arredonda para baixo resultado
  const horas = Math.floor(duracao / 60);

  // Obtém o resto da divisão
  const minutos = duracao % 60;

  // Exibe as repostas
  resp1.innerText = titulo;
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

  // Evita envio do form, reload da página
  e.preventDefault();
});
