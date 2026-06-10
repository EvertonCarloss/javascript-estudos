// Cria referência ao form e elementos onde será exibido a reposta;
const form = document.querySelector('form');
const resposta = document.querySelector('h3');

// Ouvinte do evento, acionando o submit quando for clicado;
form.addEventListener('submit', (e) => {
  // Evita envio do form;
  e.preventDefault();

  // Ouvinte para o reset do campo;
  form.addEventListener('reset', () => {
    resposta.innerText = '';
  });
  // Entrada;
  const nome = form.inNome.value;
  const masculino = form.inMasculino.checked;
  const altura = Number(form.inAltura.value);

  // Declarando a variável para o peso;
  let peso;
  if (masculino) {
    // Math.pow eleva ao quadrado;
    peso = 22 * Math.pow(altura, 2);
  } else {
    peso = 21 * Math.pow(altura, 2);
  }
  /* Podemos substituir todo o comando acima pelo operador ternário;
  
  Ex: const peso = masculino ? 22 * Math.pow(altura,2): 21 * Math.pow(altura, 2);
  
  */

  // Saída
  resposta.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`;
});
