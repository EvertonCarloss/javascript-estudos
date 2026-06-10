// Referência ao form e elementos onde será exibido a reposta;
const form = document.querySelector('form');
const resposta = document.querySelector('h3');

// Ouvinte de evento, acionado quando o botão submit for clicado;
form.addEventListener('submit', (e) => {
  // Evita envio do form;
  e.preventDefault();
  // Entrada, obtém e converte o conteúdo do campo inHoraBrasil;
  const horaBrasil = Number(form.inHoraBrasil.value);
  // Receba o horario do brasil + 5, por conta que na frança o horario é adiantado 5 horas;
  let horaFranca = horaBrasil + 5;

  // Condição se passar das 24 hpras na França;
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }
  // Saída;
  resposta.innerText = `Hora na França ${horaFranca.toFixed(2)}`;
});
