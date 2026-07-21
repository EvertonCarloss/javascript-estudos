/* Exercício 2: Crie uma função chamada calcularMedia que recebe três notas como parâmetros, calcula a média e retorna se o aluno foi Aprovado (média >= 7), Recuperação (média >= 5) ou Reprovado (média < 5). Exibe o resultado no DOM.*/

// Função;
function calcularMedia(notaUm, notaDois, notaTres) {
  return (notaUm + notaDois + notaTres) / 3;
}

function situacaoMedia(media) {
  if (media >= 7) {
    return `Aprovado! Sua média é: ${media.toFixed(2)}`;
  } else if (media >= 5) {
    return `Recuperação! Sua média é: ${media.toFixed(2)}`;
  } else if (media < 5) {
    return `Reprovado! Sua média é: ${media.toFixed(2)}`;
  }
}
// Acessando o form;
const form = document.querySelector('form');
// Saída da resposta;
const saidaMateria = document.querySelector('#materiaSaida');
const saidaMedia = document.querySelector('#mediaFinal');

// Criando evento ao clicar no butão;
form.addEventListener('submit', (e) => {
  // Evita carregamento da página;
  e.preventDefault();

  let materiaAluno = form.materia.value;
  let notaUm = Number(form.notaUm.value);
  let notaDois = Number(form.notaDois.value);
  let notaTres = Number(form.notaTres.value);

  // Dom recebendo os valores;
  const notas = calcularMedia(notaUm, notaDois, notaTres);
  const mediaFinal = situacaoMedia(notas);

  // Saída;
  saidaMateria.innerText = `${materiaAluno}`;
  saidaMedia.innerText = `${mediaFinal}`;
});
