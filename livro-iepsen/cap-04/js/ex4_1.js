// Cria referência ao form e elementos de resposta do programa;

const form = document.querySelector('form');
const resposta1 = document.querySelector('h3');
const resposta2 = document.querySelector('h4');

// Cria um Ouvinte de evento, acionando quando o botão submit for clicado;
form.addEventListener('submit', (e) => {
  // Evita o envio do form;
  e.preventDefault();
  // Entrada;
  const nome = form.inNome.value;
  const nota1 = Number(form.inNota1.value);
  const nota2 = Number(form.inNota2.value);
  // Processamento;
  const media = (nota1 + nota2) / 2;
  // Saída;
  resposta1.innerText = `Média das Notas ${media.toFixed(2)}`;
  // Condicionais;
  if (media >= 7) {
    // Alterar o texto e estilo da cor do elemento resposta2;
    resposta2.innerText = `Parabéns, ${nome}! Você foi aprovado(a)`;
    resposta2.style.color = 'blue';
  } else if (media >= 4) {
    resposta2.innerText = `Atenção, ${nome}. Você está em exame!`;
    resposta2.style.color = 'green';
  } else {
    resposta2.innerText = `Ops, ${nome}... Você foi reprovado(a)`;
    resposta2.style.color = 'red';
  }
});
